const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.static("dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//do routingu
const drinkRouter = require("./routes/drink-router");
const db = require("./db/conn");

app.listen(3000, () => {
  db.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log("Listening on port 3000!");
});
