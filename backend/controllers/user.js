const bcrypt = require('bcrypt'); // installé
const jwt = require('jsonwebtoken'); // installé
const mysql = require('mysql'); // installé
const User = require('../models/entity/user.js'); // import modele user 


exports.signup = (req, res) => {
  let user = new User(req.body.user);

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
    // hash le mot de passe
    bcrypt.hash(user.password, 10)
     .then(hash => {
     user.password = hash;

    // envoyer les ref utilisateur vers la base de données
    //**FIXME: pas compris la séquence avec manager ! que dois-je faire? */
    User.manager.create(user, (err) => {
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