const db = require('../config/db'); // pour rappel de la table
const mysql = require('mysql'); // installé

/**FIXME: routes vers tables */
class CommentManager {
  constructor() {}

  createComment(sqlInsert) {
    let sqlCreate = 'INSERT INTO comment VALUES(NULL, ?, NOW(), ?, ?);'
    sqlCreate = mysql.format(sqlCreate, sqlInsert);
    return new Promise((resolve) =>{
      db.query(sqlCreate, function (err, result, fields){
        if (err) {
          console.log(err);
          throw err;
        }
        resolve({message : 'Création nouveau commentaire'});
      })
    })
  }

  getAllComments(sqlInsert) {
    let sqlGetAll = 'SELECT comment.comment_id, comment.content, DATE_FORMAT(DATE(comment.created), \'/%d.%m.%Y\') AS created FROM comment JOIN user on comment.user_id = user_id WHERE post_id = ? ORDER BY created';
    sqlGetAll = mysql.format(sqlGetAll, sqlInsert);
    return new Promise((resolve) =>{
      db.query(sql, function (err, result, fields){
        if (err) throw err;
        resolve(result);
        })   
    })
  }
  deleteComment(sqlInsert1, sqlInsert2){
    let sql1 = 'SELECT * FROM comment where comment_id = ?';
    sql1 = mysql.format(sql1, sqlInsert1);
    return new Promise((resolve, reject) =>{
      db.query(sql1, function (err, result, fields){
        if (err) throw err;
        if(sqlInsert2[1] == result[0].userId){
          let sql2 = 'DELETE FROM comment WHERE post_id = ? AND user_id = ?';
          sql2 = mysql.format(sql2, sqlInsert2);
          db.query(sql2, function (err, result, fields){
            if (err) throw err;
              resolve({message : 'Commentaire supprimé !'});
          })
        }else{
          reject({error: 'fonction indisponible'});
        }           
      });
    })
  }

  modifyComment(sqlInsert1, sqlInsert2){
    let sql1 = 'SELECT * FROM comment WHERE comment_id = ?';
    sql1 = mysql.format(sql1, sqlInsert1);
    return new Promise((resolve) =>{
      db.query(sql1, function (err, result, fields){
        if (err) throw err;
        if(sqlInsert2[3] == result[0].user_id){
          let sql2 = 'UPDATE comment SET content = ? WHERE comment_id = ? AND user_id = ?';
          sql2 = mysql.format(sql2, sqlInsert2);
          db.query(sql2, function (err, result, fields){
            if (err) throw err;
            resolve({message : 'Post modifié !'});
          })
        }else{
          reject({error: 'fonction indisponible'});
        }
      })
    });
}   




}

module.exports = CommentManager;