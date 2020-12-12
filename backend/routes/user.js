// on a besoin d'express afin de créer un routeur
const express = require('express'); 
const router = express.Router();
const userCtrl = require('../controllers/user');
const db = require('../config/db');

// routes post

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);


module.exports = router; 