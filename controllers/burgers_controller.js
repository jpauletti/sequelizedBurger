var express = require("express");
var router = express.Router();

var db = require("../models");


// export routes
module.exports = router;


// homepage - get all burgers, display index
router.get("/", function(req, res) {
    // order alphabetically
    db.Burger.findAll({
        order: [['burger_name', 'ASC']],
        include: [ db.Customer ]
    }).then(function (dbBurger) {
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


// API page - display all burgers
router.get("/api/burgers", function(req, res) {
    db.Burger.findAll({
        include: [ db.Customer ]
    }).then(function (dbBurger) {
        res.json(dbBurger);
    });
})


// POST route - add new burger
router.post("/api/burgers", function(req, res) {
    var newBurger = req.body;

    db.Burger.create(newBurger).then(function (dbBurger) {
        console.log("new burger added");
        res.status(201).end();
    });
})


// POST route - add new customer
router.post("/api/customers", function(req, res) {
    var newCustomer = req.body;

    db.Customer.create(newCustomer).then(function (dbCustomer) {
        console.log("new customer added");
        res.status(201).end();
    })
})


// UPDATE route - update burger
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