const bcrypt = require('bcrypt'); // installé
const jwt = require('jsonwebtoken'); // installé
const User = require('../models/user'); // import modele user ou je mets tout ?

/**FIXME: 
 * identique au p6 ou pas ?
 */
exports.signup = (req, res, next) => {
    if(!req.body) {
        res.status(400).send({
            message: 'veuillez indiquer vos identifiants'
        });
    }
    bcrypt.hash(req.body.password, 10)
     .then(hash => {
     const user = new User({
         email: req.body.email,
         password: hash
     });
     user.save()
     .then(() => res.status(201).json({ message: 'User created!'}))
     .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

/**TODO:
* cas d'un utilisateur déjà créé, les regex à gérer
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