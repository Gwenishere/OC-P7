const db = require("../../config/db"); // pour rappel de la table
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// TRANSMISSION DONNEES VERS TABLES comment et post

/**FIXME: postman */
/**TODO: vérifier chemin pour tables dans phpmyadmin */
class ModerateManager {
  constructor() {
    console.log("ModerateManager initialized");
  }

  getAllPosts(sqlInsert) {
    let sqlGetAll =
      "SELECT post.post_id, post.title, post.content, post.attachment, DATE_FORMAT(DATE(post.created), '/%d.%m.%Y') AS created, post.user_id FROM post JOIN user ON post.user_id = user.user_id ORDER BY post.created DESC;";
    sqlGetAll = mysql.format(sqlGetAll, sqlInsert);
    return new Promise((resolve) => {
      db.query(sqlInsert, function (err, result, fields) {
        if (err) {
          console.log(err);
          throw err;
        }
      });
    });
  }

  deletePost(sqlInsert) {
    let sql = "DELETE FROM post WHERE post_id = ?";
    sql = mysql.format(sql, sqlInsert);
    return new Promise((resolve) => {
      db.query(sql, function (err, result, fields) {
        if (err) throw err;
        resolve({ message: "Post supprimé !" });
      });
    });
  }

  getAllComments() {
    let sql =
      "SELECT comment.comment_id, comment.content, DATE_FORMAT(DATE(post.created), '/%d.%m.%Y') AS created, user.user_id FROM comment JOIN user ON comment.user_id ORDER BY created DESC";
    return new Promise((resolve) => {
      db.query(sql, function (err, result, fields) {
        if (err) throw err;
        resolve(result);
      });
    });
  }

  deleteComment(sqlInsert) {
    let sql = "DELETE FROM comment WHERE comment_id = ?";
    sql = mysql.format(sql, sqlInsert);
    return new Promise((resolve) => {
      db.query(sql, function (err, result, fields) {
        if (err) throw err;
        resolve({ message: "Commentaire supprimé !" });
      });
    });
  }
}

module.exports = ModerateManager;
