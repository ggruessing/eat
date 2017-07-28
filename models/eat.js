var orm = require("../config/orm.js");

var burger = {
  menu: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  cook: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  throwAway: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;