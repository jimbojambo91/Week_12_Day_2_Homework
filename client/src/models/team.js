var Team = function(options) {
  this.name = options.name;
  this.coach = options.coach;
  this.year_founded = options.year_founded;
  this.stadium = options.stadium;
  this.players = options.players || [];
  }

Team.prototype = {
  addPlayer: function(player) {
    this.players.push(player);
  }
}

module.exports = Team;
