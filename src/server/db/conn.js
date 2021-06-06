const { MongoClient } = require("mongodb");

require("dotenv").config();

const DB = process.env.ATLAS_URI;
const client = new MongoClient(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good database object
      if (db) {
        _db = db.db("drinkland");
        console.log("Successfully connected to MongoDB.");
      }
      return callback(err);
    });
  },

  getDb: function () {
    return _db;
  },
};
