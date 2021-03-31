const db = require("../../config/db"); // pour rappel de la table
const mysql = require("mysql"); // installé

// TRANSMISSION DONNEES VERS TABLE post

class PostsManager {
  constructor() {
    console.log("PostsManager initialized");
  }

  createPost(sqlInsert) {
    let sqlCreate = "INSERT INTO post VALUES(NULL, ?, ?, ?, NOW(), ?);";
    sqlCreate = mysql.format(sqlCreate, sqlInsert);
    return new Promise((resolve) => {
      db.query(sqlCreate, function (err, result, fields) {
        if (err) {
          console.log(err);
          throw err;
        }
        resolve({ message: "Création nouveau post" });
      });
    });
  }

  modifyPost(sqlInsert1, sqlInsert2) {
    let sql1 = "SELECT * FROM post where post_id = ?";
    sql1 = mysql.format(sql1, sqlInsert1);
    return new Promise((resolve) => {
      db.query(sql1, function (err, result, fields) {
        if (err) throw err;
        if (sqlInsert2[3] == result[0].user_id) {
          let sql2 =
            "UPDATE post SET title = ?, content = ? attachment = ? WHERE post_id = ? AND user_id = ?";
          sql2 = mysql.format(sql2, sqlInsert2);
          db.query(sql2, function (err, result, fields) {
            if (err) throw err;
            resolve({ message: "Post modifié !" });
          });
        } else {
          reject({ error: "fonction indisponible" });
        }
      });
    });
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

  deletePost(sqlInsert1, sqlInsert2) {
    let sql1 = "SELECT * FROM post where post_id = ?";
    sql1 = mysql.format(sql1, sqlInsert1);
    return new Promise((resolve, reject) => {
      db.query(sql1, function (err, result, fields) {
        if (err) throw err;
        if (sqlInsert2[1] == result[0].user_id) {
          let sql2 = "DELETE FROM post WHERE post_id = ? AND user_id = ?";
          sql2 = mysql.format(sql2, sqlInsert2);
          db.query(sql2, function (err, result, fields) {
            if (err) throw err;
            resolve({ message: "Post supprimé !" });
          });
        } else {
          reject({ error: "fonction indisponible" });
        }
      });
    });
  }
}

module.exports = PostsManager;
