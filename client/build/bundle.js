/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var Teams = __webpack_require__(5);

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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var UI = __webpack_require__(0);

var app = function() {
  new UI();
}

window.addEventListener('load', app);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var Player = function(options) {
  this.name = options.name;
  this.dob = options.dob;
  this.position = options.position;
  }

module.exports = Player;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var Stadium = function(options) {
  this.name = options.name;
  this.capacity = options.capacity;
  }

module.exports = Stadium;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

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


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var Team = __webpack_require__(4);
var Player = __webpack_require__(2);
var Stadium = __webpack_require__(3);
var RequestHelper = __webpack_require__(6);

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


/***/ }),
/* 6 */
/***/ (function(module, exports) {

var RequestHelper = function () {

};

RequestHelper.prototype = {
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
  }
};

module.exports = RequestHelper;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map