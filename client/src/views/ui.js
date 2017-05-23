var Teams = require('../models/teams');

var UI = function() {
  var teams = new Teams();
  teams.all(function(teams){
    this.render(teams);
  }.bind(this));
  // this.createForm();
}

UI.prototype = {
  createText: function(text, label) {
    var p = document.createElement('p');
    p.innerText = label + text;
    return p;
  },

  appendText: function(element, text, label) {
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },

  createPlayer: function(li, player) {
    this.appendText(li, player.name, 'Name: ');
    this.appendText(li, player.dob, 'Date of Birth: ');
    this.appendText(li, player.position, 'Position: ');
  },

  render: function(teams) {
    var container = document.getElementById('teams');
    container.innerHTML = "";
    for (var team of teams) {
      var li = document.createElement('li');
      this.appendText(li, team.name, 'Name: ');
      this.appendText(li, team.coach, 'Coach: ');
      this.appendText(li, team.year_founded, 'Year Founded: ');
      
      for (var player of team.players){
        this.createPlayer(li, player);
      }

      container.appendChild(li);
    }
  }
  // createForm: function(){ 
  //       //create the form and a div
  //       var div = document.createElement('div');
  //       var form = document.createElement('form');
  //       var body = document.querySelector('body');
      
  //       //append input boxes to the form
  //       var titleInput = document.createElement('input');
  //       titleInput.setAttribute("name", "title");
  //       form.appendChild(titleInput);
      
  //       var genreInput = document.createElement('input');
  //       genreInput.setAttribute("name", "genre");
  //       form.appendChild(genreInput);
      
  //       var actorsInput = document.createElement('input');
  //       actorsInput.setAttribute("name", "actors");
  //       form.appendChild(actorsInput);
      
  //       //append a button to submit the form
  //       var button = document.createElement('button');
  //       button.type = 'submit';
  //       button.innerText = 'Add Film';
  //       form.appendChild(button);
      
  //       //add event handler to the onSubmit event of the form
  //       form.onsubmit = function(e){
  //         e.preventDefault();
  //         var newFilm = {
  //           title: e.target.title.value,
  //           genre: e.target.genre.value,
  //           actors: e.target.actors.value.split(',')
  //         }
      
  //         var films = new Films(); 
  //         films.add(newFilm, function(data){
  //           this.render(data)
  //         }.bind(this));
  //       }.bind(this)
  //       div.appendChild(form);
  //       body.insertBefore( div, body.firstChild );
  //     }
}

module.exports = UI;