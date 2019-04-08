
var orm = require("../config/orm.js");

var hippo = {
  all: function(cb) {
    orm.all("hippos", function(res) {
      cb(res); 
    });
  },

  create: function(cols, vals, cb) {
     orm.create("hippos", cols, vals, function(res) {
         console.log("this is the creation section " + cols)
         console.log("this is the creation section " + vals)
      cb(res);
     });
   },

    update: function(objColVals, condition, cb) {
    orm.update("hippos", objColVals, condition, function(res) {
        console.log("UPDATE from Models" + objColVals);
        console.log("UPDATE from Models" + condition);
    cb(res);
     });
   }
  
};

// Exports to the controller to run functions on the data to be sent to the model.
module.exports = hippo;