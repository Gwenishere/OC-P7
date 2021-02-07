const bcrypt = require('bcrypt');
const jwt = require('jwt');
const mysql = require("mysql"); // installé
const { default: User } = require("../entity/user"); // comment s'en servir ?
const db = require('../config/db'); // pour rappel de la table

class UserManager {
  constructor() {}
  signup(sqlInsert) {
    let sql = '';
    sql = mysql.format(sql, sqlInsert);
    return new Promise((resolve, reject) => {
        db.query(sql, function (err, result) {
            db.query(sql, function (err, result) {

            })
        })
    })
  }

  login(sqlInsert) {
    let sql = '';
    sql = mysql.format(sql, sqlInsert);
    return new Promise((resolve, reject) => {

    })
  }
  getOneUser(sqlInsert) {

  }
  getAllUsers(sqlInsert) {

  }
  deleteUser(sqlInsert) {

  }

}

module.exports = UserManager;