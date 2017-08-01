var db = require("../models")

module.exports = function(app){
app.get("/", function(req, res) {
  db.burgers.findAll().then(function(data) {
    var meal = {
      burgers: data
    };
    console.log(meal);
    res.render("index", meal);
  });
});

app.post("/", function(req, res) {
  db.burgers.create(req.body).then(function(){
    res.redirect("/");

  })
});

app.put("/:id", function(req, res) {
  console.log(req)
  db.burgers.update({devoured: req.body.devoured},{where: {id: req.params.id}}).then(function(){

    res.redirect("/");
  });
});

app.delete("/:id", function(req, res) {
  db.burgers.destroy({where: {id: req.params.id}}).then(function(){


    res.redirect("/");
  });
});

}
