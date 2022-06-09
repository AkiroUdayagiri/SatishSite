const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

mongoose.connect("mongodb://localhost:27017/todolistDB", {
  useNewUrlParser: true,
});

//Home Route
app.get("/", function (req, res) {
  res.send("Welcome to the Homepage");
});

//API Routes

// Start Server
app.listen(5000, function () {
  console.log("Server started on port 5000");
});
