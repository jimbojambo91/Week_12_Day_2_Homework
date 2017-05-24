var Team = require('./team');
var Player = require('./player');
var Stadium = require('./stadium');
var RequestHelper = require('../helpers/requestHelper.js');

var Teams = function() {
  this.requestHelper = new RequestHelper();

}

Teams.prototype = {
  all: function(callback){
    this.requestHelper.makeRequest("http://localhost:3000/api/teams", function(results){
      var teams = this.populateTeams(results);
      callback(teams);
    }.bind(this));
  },
  populateTeams: function(results){
    var teams = results.map(function(resultObject){
      return new Team(resultObject);
    })
    return teams;
  },
  add: function(newTeam, callback){
    var teamData = JSON.stringify(newTeam);
    this.requestHelper.makePostRequest("http://localhost:3000/api/teams", callback, teamData);
  }
};

module.exports = Teams;
