
var orm = require("../config/orm.js");

var cat = {
  all: function(cb) {
    orm.all("hippos", function(res) {
      cb(res); 
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("hippos", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("hippos", objColVals, condition, function(res) {
      cb(res);
    });
  }
};


module.exports = hippo;