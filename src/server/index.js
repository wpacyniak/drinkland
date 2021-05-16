const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

app.listen(3000, () => console.log("Listening on port 3000!"));
