const horizon = require('@horizon/server'); 
var path=require('path')
require('dotenv').config({path: path.resolve('../.env')});

var LolApi = require('leagueapi');
LolApi.init(process.env.SECRET_API_KEY, 'na');

console.log(path.resolve('../.env'))

var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

  app.get('/champion/:championName', function (req, res){
    res.send(req.params.championName) /*leave for now*/
  })

  app.get('/championlist/', function (req, res) {
    var options = {champData: 'image,stats,passive,spells', version : '6.16.2', locale: 'en_US', dataById:true}
    LolApi.Static.getChampionList(options,'na', function (err, champs) {
      if (err) {
        throw err
      }
      /*res.json(champs);*/
      res.send(champs);
  });
});

var httpServer=app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});

const horizonOptions = {
  auth: {
    token_secret:"akjbwiubcwenicnregb1390u89hcnqknk4nub9n1oihdbf4x2",
    allow_anonymous: true, //harden, horizon
    allow_unauthenticated: true, //harden, horizon
  },
  auto_create_collection: true, //TODO: harden, dokku/rethink
  auto_create_index: true, //TODO: harden, dokku/rethink
  permissions: false,
  project_name:'finalProj',
  rdb_host: "0.0.0.0",
  rdb_port: 28015
};

console.log('starting horizon with ' + horizonOptions);
const horizonServer = horizon(httpServer, horizonOptions);
