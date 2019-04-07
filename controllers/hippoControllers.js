var express = require("express");

var router = express.Router();

var hippo = require("../models/hippo.js");

// Create all our routes and set update logic for each route. 
router.get("/", function(req, res) {
    hippo.all(function(data) {
      var hbsObject = {
        hippos: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
     /*
  });
 
  router.post("/api/cats", function(req, res) {
    cat.create([
      "name", "sleepy"
    ], [
      req.body.name, req.body.sleepy
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/cats/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    cat.update({
      sleepy: req.body.sleepy
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
    */
  });
  
  // Export routes for server.js to use.
  module.exports = router;
  
