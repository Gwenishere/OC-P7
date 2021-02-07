const express = require('express');
const router = express.Router();


const db = require('../config/db');
const postCtrl = require('../controllers/post');
const Post = require('../models/post');
const multer = ('../middleware/multer-config');
const auth = require('../middleware/auth');
// LES ROUTES VERS LES CONTROLLERS //
// creation post 
router.post('/', auth, multer, postCtrl.createPost);
// mettre à jour les posts //**FIXME: je mets id ou idpost ou UserId?*/
router.put('/:id', auth, multer, postCtrl.modifyPost);
// obtenir un post
router.get('/:id', auth, multer, postCtrl.getOnePost);
// obtenir tous les posts
router.get('/', auth, multer, postCtrl.getAllPosts);
// réaliser une modération
router.put('/:id/moderate', auth, multer, postCtrl.moderatePost);
// supprimer un post
router.delete('/:id', auth, multer, postCtrl.deletePost);

module.exports = router;