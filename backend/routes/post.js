const express = require('express');
const router = express.Router();



const postCtrl = require('../controllers/post');

const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');
// LES ROUTES VERS LES CONTROLLERS //
// creation post 
router.post('/createpost', auth, multer, postCtrl.createPost);
// mettre à jour les posts //**FIXME: je mets id ou idpost ou UserId?*/
router.put('/modifypost/:id', auth, multer, postCtrl.modifyPost);
// obtenir un post
router.get('/getonepost/:id', auth, multer, postCtrl.getOnePost);
// obtenir tous les posts
router.get('/getallposts', auth, multer, postCtrl.getAllPosts);
// réaliser une modération
router.put('/moderate/:id', auth, multer, postCtrl.moderatePost);
// supprimer un post
router.delete('/deletepost/:id', auth, multer, postCtrl.deletePost);

module.exports = router;