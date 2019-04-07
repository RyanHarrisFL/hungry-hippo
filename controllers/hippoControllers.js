var express = require("express");

var router = express.Router();

var hippo = require("../models/hippo.js");

// Create all our routes and set update logic for each route. 
router.get("/", function(req, res) {
    hippo.all(function(data) {
      var hbsObject = {
        hippos: data
      };
     
      res.render("index", hbsObject);
    });
     
  });
 
  router.post("/api/hippos", function(req, res) {
    hippo.create([
      "food_name", "devoured"
    ], [
      req.body.food_name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
      
    });
  });
  
  router.put("/api/hippos/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
  
    hippo.update({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
    
  });
  
  // Export routes for server.js to use.
  module.exports = router;
  

