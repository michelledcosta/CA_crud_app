var mysql = require("mysql");
var express = require("express");
var app = express();
var bodyParse = require("body-parser");

app.use(bodyParse.json());

var con_obj = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "ca2"
};

var con = mysql.createConnection(con_obj);

con.connect(function(error) {
  if (error) throw error;
  console.log("connected to database");
});

app.post("/", function(req, res) {
  console.log("POST REQUIRED");

  console.log(req.body);
  var name = req.body.name;
  var cost = req.body.cost;
  var sql_query =
    "Insert into item (name,cost) values ('" + name + "','" + cost + "')";
  console.log("RUNNING QUERY");
  con.query(sql_query, function(error, data) {
    if (error) {
      console.log(error);
    } else {
      console.log(JSON.stringify(data));
      // res.send(JSON.stringify(data));
    }
  });
  console.log("DATA INSERTED");
  res.writeHead(200, { "Content-type": "application/json" });
  // res.write(data);
  res.end();
});

app.get("/", function(req, res) {
  var sql_query = "select * from item;";
  res.writeHead(200, { "Content-type": "application/json" });
  con.query(sql_query, function(err, data, field) {
    if (err) {
      console.log(err);
    } else {
      data = JSON.stringify(data);
      res.write(data);
      console.log(data);
      res.end();
    }
  });
});

app.listen(8080);
