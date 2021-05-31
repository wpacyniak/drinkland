const { MongoClient } = require("mongodb");
const DB = process.env.ATLAS_URI;
const url =
  "mongodb+srv://wpacyniak:7092000wp@books.yprgy.mongodb.net/drinkland?retryWrites=true&w=majority";
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
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
