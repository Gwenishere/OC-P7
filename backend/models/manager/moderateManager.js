const db = require('../config/db'); // pour rappel de la table
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


/**FIXME: postman */
/**TODO: vérifier chemin pour tables */
class ModerateManager {
    constructor() {
    }

    getAllPosts(){
        let sql = "SELECT ";
        return new Promise((resolve) =>{
          db.query(sql, function (err, result, fields) {
            if (err) throw err;
              resolve(result)
          });
        })
    };

    deletePost(sqlInsert){
        let sql = 'DELETE';
        sql = mysql.format(sql, sqlInserts);
        return new Promise((resolve) =>{
          db.query(sql, function (err, result, fields){
            if (err) throw err;
            resolve({message : 'Post supprimé !'});
          })
        })
    };

    getAllComments(){
        let sql = 'SELECT ';
        return new Promise((resolve) =>{
          db.query(sql, function (err, result, fields){
            if (err) throw err;
            resolve(result);
          })
        })
    };

    deleteComment(sqlInsert){
        let sql = 'DELETE';
        sql = mysql.format(sql, sqlInsert);
        return new Promise((resolve) =>{
            db.query(sql, function (err, result, fields){
                if (err) throw err;
                resolve({message : 'Commentaire supprimé !'});
            })
        })
    }
}


module.exports = ModerateManager;