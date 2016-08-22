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
    var options = {champData: 'image,stats,passive,spells,skins', version : '6.16.2', locale: 'en_US', dataById:true}
    LolApi.Static.getChampionList(options,'na', function (err, champs) {
      if (err) {
        throw err
      }
      /*res.json(champs);*/
      res.send(champs);
  });
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
