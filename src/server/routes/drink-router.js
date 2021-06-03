const express = require("express");

const drinkRoutes = express.Router();

const db = require("../db/conn");

//Get a list of all the drinks
drinkRoutes.route("/drinks").get(function (req, res) {
  let db_connect = db.getDb("drinkland");
  db_connect
    .collection("Drinks")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      console.log("Get list of drinks");
      res.json(result);
    });
});

//Add a new drink
drinkRoutes.route("/drinks/add").post(function (req, res) {
  console.log("Start adding drink!");
  let db_connect = db.getDb("drinkland");
  let item = {
    drinkName: req.body.drinkName,
  };
  db_connect.collection("Drinks").insertOne(item, function (err, res) {
    if (err) throw err;
    console.log("Drink added");
  });
});

//TODO: Get a drink by ID
drinkRoutes.route("/:id").get(function (req, res) {
  let db_connect = db.getDb("drinkland");
  db_connect
    .collection("Drinks")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      let drink = result.find((o) => o._id == req.query.id);
      console.log("Got drink");
      res.json(drink);
    });
});

//Insert ingredient
drinkRoutes.route("/:id/update").post(function (req, res) {
  let db_connect = db.getDb("drinkland");
  let drink_id = { id: req.body.id };
  let item = {
    ingredient: req.body.ingredientName,
    amount: req.body.amount,
    color: req.body.color,
    drinks_id: drink_id,
  };
  db_connect.collection("Items").insertOne(item, function (err, res) {
    if (err) throw err;
    console.log("Ingredient added");
  });
});

// Delete a drink
drinkRoutes.route("/:id").delete((req, res) => {
  let db_connect = db.getDb("drinkland");
  var myQuery = { id: req.body.id };
  db_connect.collection("Drinks").deleteOne(myQuery, function (err, obj) {
    if (err) throw err;
    console.log("Drink deleted");
  });
});

// Delete a ingredient
drinkRoutes.route("/:id").delete((req, res) => {
  let db_connect = db.getDb("drinkland");
  var myQuery = { id: req.body.id };
  db_connect.collection("Items").deleteOne(myQuery, function (err, obj) {
    if (err) throw err;
    console.log("Ingredient deleted");
  });
});

module.exports = drinkRoutes;
