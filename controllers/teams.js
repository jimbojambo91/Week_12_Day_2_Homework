var express = require('express');
var app = express();
var teamRouter = express.Router();
//models
//since we don't have a database we'll use our front end models at the moment
// var teams = require('../client/src/models/teams')();
var Team = require('../client/src/models/team');
// var Player = require('../client/src/models/player');

var TeamQuery = require('../db/teamQuery.js');
var query = new TeamQuery();

//team by id
teamRouter.get('/:id', function(req, res){
  res.json(teams[req.params.id]);
});

//team index
teamRouter.get('/', function(req, res) {
  query.all(function(teams){
    res.json(teams);
  });
});

//team update
teamRouter.put('/:id', function(req, res) {
  var team = new Team({
    title: req.body.title,
    actors: req.body.actors
  });
  teams[req.params.id] = team;
  res.json({data: teams});
});

//add new team
teamRouter.post('/', function(req, res) {
  var team = new Team({
    title: req.body.title,
    genre: req.body.genre,
    actors: req.body.actors 
  });
  query.add(team, function(results){
    res.json(results);
  });
  // res.json({data: teams});
});

//delete team
teamRouter.delete('/:id', function(req, res) {
  teams.splice(req.params.id, 1);
  res.json({data: teams});
});

//add player
teamRouter.post('/:id/players', function(req, res) {
  var team = teams[req.params.id];
  var player1 = new Player({
    comment: "Amaze",
    rating: 10,
    author: "Val"
  });
  team.addPlayer(player1);
  res.json({data: teams});
});


module.exports = teamRouter;