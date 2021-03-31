const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const modCtrl = require('../controllers/moderate');

// LES ROUTES VERS LES CONTROLLERS //
// obtenir tous les posts
router.get('/posts', auth, multer, modCtrl.getAllPosts);
// supprimer un post
router.delete('/post/:id', auth, multer, modCtrl.deletePost);
// obtenir tous les commentaires
router.get('/comments', auth, modCtrl.getAllComments);
// supprimer un commentaire
router.delete('/comment/:id', auth, modCtrl.deleteComment);

module.exports = router;