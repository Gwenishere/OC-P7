const mysql = require("mysql");
const dbConfig = require("./config.js");

const db = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});
//Connection à phpMyAdmin mysql
db.connect((error) => {
  if (error) {
    console.error("erreur de connection : " + error.stack);
    return;
  } 
  console.log("message de db.js : Connection réussie à la base de donnée");
});
module.exports = db;
