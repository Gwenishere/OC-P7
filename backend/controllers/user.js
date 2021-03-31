const bcrypt = require("bcrypt"); // installé
const jwt = require("jsonwebtoken"); // installé
const mysql = require("mysql"); // installé
const User = require("../models/entity/user.js"); // import modele user
const db = require("../config/db"); // import modele db

// on reprends les noms des inputs

// inscription d'un utilisateur => gérer doublon email avec select (models) et condition ici
exports.signup = (req, res) => {
  console.log("message de controllers signup");
  let user = new User(req.body.user);
  const username = req.body.user.username;
  const email = req.body.user.email;
  const password = req.body.user.password;
  const registration = req.body.user.registration;
  const user_admin = req.body.user.user_admin;
  if (!user.checkpassword()) {
    return res
      .status(400)
      .json({
        message:
          "le mot de passe doit contenir 1 minuscule, 1 majuscule, 1 chiffre, 8 caractères",
      });
  }
  if (!req.body) {
    return res.status(400).send({ message: "Le champs doit être complété" });
  }
  if (
    !req.body.user.username &&
    !req.body.user.password &&
    !req.body.user.email
  ) {
    res.status(401).json({ message: "Valeur manquante !" });
  }
  bcrypt.hash(user.password, 10, function (err, hash) {
    user.password = hash;
    console.log("mot de passe haché : " + user.password);
    db.query(
      "INSERT INTO user (username, email, password, registration, user_admin) VALUES (?, ?, ?, NOW(), ?);",
      [username, email, hash, user_admin], // envoyer les ref utilisateur vers la base de données
      (err, results) => {
        if (err) {
          res.status(500).send({ message: err.message });
        } else {
          res.status(201).send(results);
        }
      }
    );
  });
};
/**TODO:* bloquer au bout de 5 tentatives du mdp ?*/
// connexion d'un utilisateur
exports.login = (req, res, next) => {
  let user = new User(req.body.user);
  let email = req.body.user.email;
  console.log(email);
  let password = req.body.user.password;
  console.log(password);
  if (!email || !password) {
    return res.status(500).json({ error: "Veuillez compléter les champs" });
  }
  db.query("SELECT * FROM user WHERE email = ?", [email], (err, results) => {
    console.log(err, results);

    console.log(password, email.password);
    if (err) {
      console.log("message du controllers user" + err);
    }
    if (results.length > 0) {
      bcrypt.compare(password, results[0].password).then((valid) => {
        console.log(valid, password, results[0].password);
        if (valid) {
          return res.status(200).json({
            user_id: results[0].user_id,
            token: jwt.sign(
              { user_id: results[0].user_id },
              "RANDOM_TOKEN_SECRET", // simple chaine
              { expiresIn: "24h" }
            ),
          });
        } else {
          return res.status(401).json({ message: "Mot de passe incorrect !" });
        }
      });
    }
  });
};
// atteindre 1 seul utilisateur je mets encoreURI ?
exports.getOneUser = (req, res, next) => {
  const user_id = req.params.user.user_id;
  db.query("SELECT email FROM user ", [email], (error, results) => {
    if (error) {
      return res.status(400).json(error);
      console.log("erreur 400 get one");
    }
    return res.status(200).json({ results });
  });
};
// atteindre tous les utilisateurs
exports.getAllUsers = (req, res, next) => {
  let user = new User(req.body.user);
  const user_id = req.body.user.user_id;
  const username = req.body.user.username;
  const email = req.body.user.email;
  const user_admin = req.body.user.user_admin;
  db.query(
    "SELECT user_id, username, email, user_admin FROM user WHERE email ORDER BY user_admin ASC",
    [user_id, username, email, user_admin],
    (error, results) => {
      if (error) {
        return res.status(400).json(error);
        console.log("erreur 400 get all");
      }
      return res.status(200).json({ results });
    }
  );
};
// supprimer un compte utilisateur
/**FIXME:et ses messages, ici en cascade ? */
exports.deleteUser = (req, res, next) => {
  const user_id = req.params.user.user_id;

  db.query(
    "DELETE FROM user WHERE user_id = ?",
    [user_id],
    (error, results) => {
      if (error) {
        return res.status(400).json(error);
      }
      return res.status(200).json({ results });
    }
  );
};
