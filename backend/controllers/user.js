const bcrypt = require('bcrypt'); // installé
const jwt = require('jsonwebtoken'); // installé
const mysql = require('mysql'); // installé
const User = require('../models/user.js'); // import modele user 

exports.signup = (req, res) => {
    if(!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,})/.test(req.body.password)) {
        return res.status(400).json({
            message: 'le mot de passe doit contenir 1 minuscule, 1 majuscule, 1 chiffre, 8 caractères'
        });
    }
    if (!req.body) {
      res.status(400).send({
          message: "Le champs doit être complété"
      });
  };
    // hash le mot de passe
    bcrypt.hash(req.body.password, 10)
     .then(hash => {
     const user = new User({
         email: req.body.email,
         password: hash
     });
    // envoyer les ref utilisateur vers la base de données
    User.create(user, (err) => {
    if (err) {
      res.status(500).send({
        message: "problème lors de la création du compte"
      });
    }
   })
   })
}
/**TODO:
* bloquer au bout de 5 tentatives du mdp ?
*/

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        bcrypt.compare(req.body.password, user.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            res.status(200).json({
              userId: user._id,
              token: jwt.sign(
                  { userId: user._id },
                  'RANDOM_TOKEN_SECRET', // simple chaine
                  { expiresIn: '24h' }
              )
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };