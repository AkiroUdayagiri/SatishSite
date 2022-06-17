const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const mongoose = require("mongoose");
const Pool = require("pg").Pool;

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

mongoose.connect("mongodb://localhost:27017/todolistDB", {
  useNewUrlParser: true,
});

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Plurality",
  password: "root",
  port: 5432,
});

//API Routes

app.route("/api/plurality/:industry").get(function (req, res) {
  const months = {
    Jan: "0",
    Feb: "1",
    Mar: "2",
    Apr: "3",
    May: "4",
    Jun: "5",
    Jul: "6",
    Aug: "7",
    Sep: "8",
    Oct: "9",
    Nov: "10",
    Dec: "11",
  };
  pool.query(
    `SELECT date, industry, avgrs FROM rs_industry_groups_plurality_history WHERE industry='${req.params.industry}'`,
    (error, results) => {
      if (error) {
        console.error(error);
      }
      let data = results.rows.map((row) => {
        const date = _.split(row.date, ".", 1);
        return {
          x: date,
          y: row.avgrs,
        };
      });
      res.send({
        industry: results.rows[0].industry,
        data: data,
      });
    }
  );
});

//Home Route
app.route("/").get((req, res) => {
  res.send("Welcome to the Homepage");
});

// Start Server
app.listen(5000, function () {
  console.log("Server started on port 5000");
});
