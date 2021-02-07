const db = require('../config/db'); // pour rappel de la table

const mysql = require('mysql'); // installé

class PostsManager {
  constructor() {
  }
 //**TODO: finir la séquence, voir resolve, result */
  createPost(sqlInsert) {
    let sqlCreate = 'INSERT INTO post (title, description, attachment)VALUES (?, ?, ?, NOW())';
    sqlCreate = mysql.format(sqlCreate, sqlInsert);
    return new Promise((resolve) => {
      db.query(sqlCreate, function (err, result, fields) {
          if (err) {
            console.log(err);
            throw err;
          }
          resolve({message: 'Création nouveau post'});
      })
    })
  }

  modifyPost(sqlInsert) {
    let sqlModify = '' ;
    sqlModify = mysql.format(sqlModify, sqlInsert);
    return new Promise((resolve) => {
      db.query(sqlModify, function(err, result, fields) {
        if (err) {
          console.log(err);
          throw err;
        }

      })
    })
  }   

  getAllPosts(sqlInsert) {
    let sqlGetAll  = '';
    sqlGetAll = mysql.format(sqlGetAll, sqlInsert);
    return new Promise((resolve) => {
      db.query(sqlInsert, function (err, result, fields){
        if (err) {
            console.log(err);
            throw err;
          }
  
      })
    })
  }

  moderatePost(sqlInsert) {


  }
  
  deletePost(sqlInsert) {
    let    = '';

    return new Promise((resolve) => {


    })

  }

}


module.exports = PostsManager;