const express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");

var database = require("./Database/connection");
var userDbService = require("./userDbService");

const app = express();
const port = 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const allowedOrigins = ["http://localhost:3000", "http://localhost:8080"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

console.log("called outer");

// DB connection
database.connectWithDb();

app.get("/auth/get-all-users", (req, res) => {
  console.log("called get method");

  userDbService
    .getAllUsers()
    .then((docs) => {
      res.send(JSON.stringify(docs));
    })
    .catch((err) => {
      console.log(err);
      res.send(JSON.stringify({ status: "Failed to fetch user" }));
    });
});

app.post("/auth/add-user", (req, res) => {
  console.log("called post method with param", JSON.stringify(req.body));
  const { name, age } = req.body;

  userDbService
    .insertUser({ name, age })
    .then(() => {
      res.send(JSON.stringify({ status: "success", message: "Data inserted" }));
    })
    .catch((err) => {
      console.log(err);
      res.send(JSON.stringify({ status: "Failed to insert user" }));
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
