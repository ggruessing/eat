
var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL)}

else{
mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "notmysql",
  database: "eat_db"
  dialect: "mysql"
});
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("Waiter on id: " + connection.threadId);
});

module.exports = connection;
