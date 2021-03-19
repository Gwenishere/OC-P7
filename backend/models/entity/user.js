 const express = require("express");
 const sql = require('../../config/db');

//  modele db pour un user, user_id créé par mysql
class User {
    constructor(user) {
     this.username= user.username;
     this.email = user.email;
     this.password = user.password;
     this.registration = user.registration;
     this.user_admin = user.user_admin;
    }
    checkpassword () {
        var regex = new RegExp("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}");
        return regex.test(this.password);
    }
}

module.exports = User;
