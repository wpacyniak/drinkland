const express = require("express");
const bodyParser = require("body-parser");

const db = require("./db");

const app = express();

app.use(express.static("dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

app.listen(3000, () => console.log("Listening on port 3000!"));
