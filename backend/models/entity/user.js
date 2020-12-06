 const express = require("express");
 const sql = require('../../config/db');

//  modele db pour un user, user_id créé par mysql
class User {
    constructor(user) {
     this.user_id = user.user_id;
     this.email = user.email;
     this.password = user.password;
    }
    checkpassword () {
        var regex = new RegExp("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}");
        return regex.test(this.password);
    }
}



module.exports = User;
