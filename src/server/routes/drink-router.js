const express = require("express");
const ObjectId = require("mongodb").ObjectID;

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

//Get a drink by ID
drinkRoutes.route("/drinks/:id").get(function (req, res) {
  let db_connect = db.getDb("drinkland");
  db_connect
    .collection("Drinks")
    .findOne({ _id: ObjectId(req.params.id) }, (err, result) => {
      if (err) throw err;
      if (result == null) {
        console.log("Not found a drink by this id.");
      }
      console.log("Got a drink");
      res.json(result);
    });
});

//Get a list of ingredients
drinkRoutes.route("/ingredients/:id").get(function (req, res) {
  let db_connect = db.getDb("drinkland");
  db_connect
    .collection("Items")
    .find({ drinks_id: ObjectId(req.params.id) })
    .toArray(function (err, result) {
      if (err) throw err;
      console.log("Get list of ingredients");
      res.json(result);
    });
});

//Insert ingredient
drinkRoutes.route("/:id/addIngredient").post(function (req, res) {
  let db_connect = db.getDb("drinkland");
  let item = {
    ingredient: req.body.ingredientName,
    amount: req.body.amount,
    color: req.body.color,
    drinks_id: ObjectId(req.body.drink_id),
  };
  db_connect.collection("Items").insertOne(item, function (err, res) {
    if (err) throw err;
    console.log("Ingredient added");
  });
});

// Delete a drink
drinkRoutes.route("/:id").delete((req, res) => {
  let db_connect = db.getDb("drinkland");
  db_connect
    .collection("Drinks")
    .deleteOne({ _id: ObjectId(req.params.id) }, function (err, obj) {
      if (err) throw err;
      console.log("Drink deleted");
    });
});

//Delete a ingredient
drinkRoutes.route("/ingredient/:id").delete((req, res) => {
  let db_connect = db.getDb("drinkland");
  db_connect
    .collection("Items")
    .deleteOne({ _id: ObjectId(req.params.id) }, function (err, obj) {
      if (err) throw err;
      console.log("Ingredient deleted");
    });
});

module.exports = drinkRoutes;
