// Requires express for routing. 
var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Set's up static content in the public folder - CSS, HTML, jQuery
app.use(express.static("public"));

// Middleware for parsing application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Requires Handlebars - template generator.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Importing of routes. Also gives server access to them.
var routes = require("./controllers/hippoController.js");

app.use(routes);

// Starts server. 
app.listen(PORT, function() {
  //Log to verify which port the server is listening on. 
  console.log("Server listening on: http://localhost:" + PORT);
});
