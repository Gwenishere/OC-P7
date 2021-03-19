// on a besoin d'express afin de créer un routeur
const express = require('express'); 
const router = express.Router();
const userCtrl = require('../controllers/user');
const db = require('../config/db');
const auth = require('../middleware/auth');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/profile', auth, userCtrl.getOneUser);
router.get('/profiles', auth, userCtrl.getAllUsers); //revoir les routes !!!**//
router.delete('/profile', auth, userCtrl.deleteUser ); //**pas sûre de cette route */

module.exports = router; 