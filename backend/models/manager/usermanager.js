const express = require("express");
const app = express();
const mysql = require("mysql");
const { default: User } = require("../entity/user");



exports.getAll = () => {
    // ici on fait la requete
/*.then((results) => {
    let listUser = [];
    for(let user of results) {
        listUser.push(new User(user));
    }
    return listUser;
})*/
}

/**TODO: 
 * finir la fonction. Mais que mettre ??? pas compris 
 */