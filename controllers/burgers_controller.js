var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();


// export routes
module.exports = router;

router.get("/", function(req, res) {
    burger.all(function(data) {
        var allBurgers = {
            burgers: data
        };
        console.log(allBurgers);
        res.render("index", allBurgers);
    })
})

router.get("/api/burgers", function(req, res) {
    burger.all(function (data) {
        res.json(data);
    })
})

router.post("/api/burgers", function(req, res) {
    var newBurger = req.body.burger;
    console.log(newBurger);
    burger.create(newBurger, function(response) {
        console.log("new burger added");
        res.status(201).end();
    });
})

router.put("/api/burgers/:id", function(req, res) {
    var id = req.params.id;
    burger.update("devoured", true, "id = " + id, function(response) {
        console.log("one burger devoured");
        res.status(201).end();
    });
})