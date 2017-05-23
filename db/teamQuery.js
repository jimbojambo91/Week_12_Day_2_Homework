var MongoClient = require("mongodb").MongoClient;

var TeamQuery = function(){
  this.url = "mongodb://localhost:27017/football";
}

TeamQuery.prototype = {
  all: function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection('teams');
        collection.find().toArray(function(err, docs){
          onQueryFinished(docs);
        });
      }
    });
  },
  add: function(teamToAdd, onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection('teams');
        collection.insert(teamToAdd);
        collection.find().toArray(function(err, docs){
          console.log(docs)
          onQueryFinished(docs);
        })
      }
    })
  }
};

module.exports = TeamQuery;