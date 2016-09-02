const horizon = require('@horizon/server'); 
var path=require('path')
var url=require('url')
require('dotenv').config();

var LolApi = require('leagueapi');
LolApi.init(process.env.SECRET_API_KEY, 'na');

var express = require('express');
var app = express();
app.use(express.static(path.resolve(__dirname + '/../public')));

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname + '/../public/index.html'));
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

  app.get('/api/champions/:champId', function (req, res){
    var options = {champData: 'image,stats,passive,spells', version : '6.16.2', locale: 'en_US', dataById:true}
    LolApi.Static.getChampionById(req.params.champId, options,'na', function (err, champs) {
      if (err) {
        throw err
      }
      /*res.json(champs);*/
      res.send(champs);
    });
    //res.send(req.params.championName) leave for now
  });

  app.get('/api/champions/', function (req, res) {
    var options = {champData: 'image', version : '6.16.2', locale: 'en_US', dataById:true}
    LolApi.Static.getChampionList(options,'na', function (err, champs) {
      if (err) {
        throw err
      }
      /*res.json(champs);*/
      res.send(champs);
  });
});

var httpServer=app.listen(process.env.PORT, function () {
  console.log('Example app listening on port '+process.env.PORT +"!");
});

if(!process.env.RETHINKDB_URL) {
  throw 'RETHINKDB_URL environment variable must be defined.'
}
/*
Transform: http://myhost.com:28015
Into:      myhost.com:28015
*/
var urlRethinkDB = url.parse(process.env.RETHINKDB_URL);

const horizonOptions = {
  auth: {
    token_secret:"akjbwiubcwenicnregb1390u89hcnqknk4nub9n1oihdbf4x2",
    allow_anonymous: true, //harden, horizon
    allow_unauthenticated: true, //harden, horizon
  },
  auto_create_collection: true, //TODO: harden, dokku/rethink
  auto_create_index: true, //TODO: harden, dokku/rethink
  permissions: false,
  project_name:'champions',
  rdb_host: urlRethinkDB.hostname,
  rdb_port: urlRethinkDB.port
};

console.log('starting horizon with ' + horizonOptions);
const horizonServer = horizon(httpServer, horizonOptions);
