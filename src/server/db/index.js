const mongoose = require("mongoose");

mongoose
  .connect(
    'mongodb+srv://wpacyniak:7092000wp@books.yprgy.mongodb.net/drinkland?retryWrites=true&w=majority"',
    { useNewUrlParser: true }
  )
  .catch((e) => {
    console.error("Connection to dataBase error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
