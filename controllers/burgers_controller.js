var express = require("express");
// var burger = require("../models/burger.js");
var router = express.Router();

var db = require("../models");


// export routes
module.exports = router;

router.get("/", function(req, res) {
    db.Burger.findAll({}).then(function (dbBurger) {
        var allBurgers = {
                burgers: dbBurger
            };
        res.render("index", allBurgers);
    });

    // db.Burger.findAll({
    //     include: [db.Post]
    // }).then(function (dbAuthor) {
    //     res.json(dbAuthor);
    // });
})


router.get("/api/burgers", function(req, res) {
    db.Burger.findAll({}).then(function (dbBurger) {
        res.json(dbBurger);
    });
})


router.post("/api/burgers", function(req, res) {
    var newBurger = req.body;

    db.Burger.create(newBurger).then(function (dbBurger) {
        console.log("new burger added");
        res.status(201).end();
    });
})


router.put("/api/burgers/:id", function(req, res) {
    var id = req.params.id;

    db.Burger.update(
        { devoured: true },
        {
            where: {
                id: id
            }
    }).then(function (dbBurger) {
        console.log("one burger devoured");
        res.status(201).end();
    });
})