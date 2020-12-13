const bcrypt = require('bcrypt'); // installé
const jwt = require('jsonwebtoken'); // installé
const mysql = require('mysql'); // installé
const User = require('../models/entity/user.js'); // import modele user 
const db = require('../config/db');

exports.signup = (req, res) => {
  console.log("message de signup");
  let user = new User(req.body.user);
  const username = req.body.user.username;
  const email = req.body.user.email;
  const password = req.body.user.password;
  if(!user.checkpassword()) {
        return res.status(400).json({
            message: 'le mot de passe doit contenir 1 minuscule, 1 majuscule, 1 chiffre, 8 caractères'
        });
    }
    if (!req.body) {
     return res.status(400).send({
          message: "Le champs doit être complété"
      });
  };
  bcrypt.hash(user.password, 10) // hash le mot de passe
     .then(hash => {
     user.password = hash;
    // envoyer les ref utilisateur vers la base de données
 //**FIXME: pas compris la séquence avec manager ! que dois-je faire? */ /* User.manager.create(user, (err) => { if (err) { res.status(500).send({  message: "problème lors de la création du compte" });}})*/
   })
    if (!req.body.user.username && !req.body.user.password && !req.body.user.email) {
      res.status(401).json({ message: 'Valeur manquante !'});
    }
    db.query(
        "INSERT INTO user (username, email, password) VALUES (?, ?, ?);", [username, email, password], 
        (err, results)=> {         
          if (err) {
            res.status(500).send({message: 'erreur connection'});
          } else {
            res.status(201).send(results);
          }
        } 
    );
  }
/**TODO:
* bloquer au bout de 5 tentatives du mdp ?
*/
exports.login = (req, res, next) => {
  let email = req.body.user.email;
  let password = req.body.user.password;
        if (!email || !password) {
          return res.status(500).json({ error: 'Veuillez compléter les champs' });
        }
        bcrypt.compare(req.body.user.password, user.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            res.status(200).json({
              userId: user.user_id,
              token: jwt.sign(
                  { userId: user.user_id },
                  'RANDOM_TOKEN_SECRET', // simple chaine
                  { expiresIn: '24h' }
              )
            });
          }).catch(error => res.status(500).json({ error }));
        }