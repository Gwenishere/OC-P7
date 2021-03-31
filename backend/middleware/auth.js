const jwt = require("jsonwebtoken"); // installé
const db = require("../config/db");
const mysql = require("mysql"); // installé

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET"); // la clé correspond à celle dans controllers user
    const user_id = decodedToken.user_id;
    let sqlInsert = [user_id];
    let sql = "SELECT COUNT(user_id) FROM user WHERE user_id=?";
    sql = mysql.format(sql, sqlInsert);
    db.query(sql, function (err, result) {
      if (err) reject({ error: "Erreur dans l'inscription" });
      if (result[0]["COUNT(user_id)"] !== 1) {
        throw "Token invalide";
      } else {
        next();
      }
    });
  } catch (error) {
    res.status(401).json({ error: error | "Requête non authentifiée!" });
  }
};
