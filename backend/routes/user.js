// on a besoin d'express afin de créer un routeur
const express = require('express'); 
const router = express.Router();
const userCtrl = require('../controllers/user');
const db = require('../config/db');

// routes post
/*router.post('/signup', (res, req) =>{
    const email = req.body.email;
    const password = req.body.password;
    db.query(
        "INSERT INTO user (email, password) VALUES (?, ?);",
        (err, results)=> {
          console.log(err);
          res.send(results);
        }
    );
});*/

module.exports = router; 