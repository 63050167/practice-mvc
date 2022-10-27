//Import
const mysql = require("mysql");
const connection = mysql.createConnection({
  //My account in mysql
  host: "localhost",
  database: "mvc",
  user: "root",
  password: "!@#$%^&*()password1234567890",
});
//connect and console log in terminal
connection.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }

  console.log("Connected to the MySQL server.");
});
//Export
module.exports = connection;
//SQL FOR CREATE Table in MySQL
/*
SQL Create Table
CREATE TABLE my_post (
    path_id int AUTO_INCREMENT,
    path_file varchar(255),
    reach int,
    likes int,
    share int,
    comment int,
    engagement float,
    viral varchar(255),
PRIMARY KEY (path_id)
);
*/
