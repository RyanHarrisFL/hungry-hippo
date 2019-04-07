
var orm = require("../config/orm.js");

var hippo = {
  all: function(cb) {
    orm.all("hippos", function(res) {
      cb(res); 
    });
  },

//   create: function(cols, vals, cb) {
//     orm.create("hippos", cols, vals, function(res) {
//       cb(res);
//     });
//   },

    update: function(objColVals, condition, cb) {
    orm.update("hippos", objColVals, condition, function(res) {
    cb(res);
     });
   }
  
};

// Exports to the controller to run functions on the data to be sent to the model.
module.exports = hippo;