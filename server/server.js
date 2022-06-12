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
  pool.query(
    `SELECT date, industry, avgrs FROM rs_industry_groups_plurality_history WHERE industry='${req.params.industry}'`,
    (error, results) => {
      if (error) {
        console.error(error);
      }
      let data = results.rows.map((row) => {
        const date = [
          parseInt(_.split(row.date, "-")[0].substring(11, 15)),
          _.split(row.date, "-")[0].substring(4, 7),
          parseInt(_.split(row.date, "-")[0].substring(8, 10)),
        ];
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
