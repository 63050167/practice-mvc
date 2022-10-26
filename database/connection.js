const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  database: "mvc",
  user: "root",
  password: "!@#$%^&*()password1234567890",
});
connection.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }

  console.log("Connected to the MySQL server.");
});

module.exports = connection;
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
