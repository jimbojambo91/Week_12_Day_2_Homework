var Team = require('./team');
var Player = require('./player');
var Stadium = require('./stadium');

var Teams = function() {

}

Teams.prototype = {
  makeRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener('load', function(){
      if(request.status !== 200) return;
      var jsonString = request.responseText;
      var resultsObject = JSON.parse(jsonString);
      callback(resultsObject);
    })
    request.send();
  },
  makePostRequest: function(url, callback, payload){
    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener('load', function(){
      if(request.status !== 200) return;
      var jsonString = request.responseText;
      var resultsObject = JSON.parse(jsonString);
      callback(resultsObject);
    })
    request.send(payload);
  },
  all: function(callback){
    this.makeRequest("http://localhost:3000/api/teams", function(results){
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
    this.makePostRequest("http://localhost:3000/api/teams", callback, teamData);
  }
};

module.exports = Teams;
