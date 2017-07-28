var express = require("express"); 

var router = express.Router();

var burger = require("../models/eat.js");

router.get("/", function(req, res) {
  burger.menu(function(data) {
    var meal = {
      burgers: data
    };
    console.log(meal);
    res.render("index", meal);
  });
});

router.post("/", function(req, res) {
  burger.cook([
    "name", "devoured",
  ], [
    req.body.name, false ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.throwAway(condition, function() {
    res.redirect("/");
  });
});

module.exports = router;
