var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// static content - use public directory
app.use(express.static("public"));

// models for syncing
var db = require("./models");

// parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set handlebars
var handlebars = require("express-handlebars");

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// sync sequelize models and start server
db.sequelize.sync({}).then(function () {
    app.listen(PORT, function () {
        console.log("Server listening on: http://localhost:" + PORT);
    });
});