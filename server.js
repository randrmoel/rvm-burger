//require packages
//set express
var express = require("express");
//set handbars
var exphbs = require("express-handlebars");

var PORT = process.env.PORT|| 8080;

var app = express();

//static content location

app.use(express.static("public"));

// JSON Parsing tools
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//set up handlebars as view engine
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//import routes
var routes = require("./controllers/burgers_controllers");

app.use(routes);

//Start server, listen for cleint requests
app.listen(PORT, () =>{
    console.log("Server listening on: http://localhost: "+ PORT);
});