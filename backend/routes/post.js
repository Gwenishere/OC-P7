const express = require("express");
const router = express.Router();

const multer = require("../middleware/multer-config");
const auth = require("../middleware/auth");

const postCtrl = require("../controllers/post");

// LES ROUTES VERS LES CONTROLLERS //
// creation post
router.post("/createpost", auth, multer, postCtrl.createPost);
// mettre à jour le post
router.put("/modifypost/:id", auth, multer, postCtrl.modifyPost);
// obtenir tous les posts
router.get("/getallposts", auth, multer, postCtrl.getAllPosts);
// supprimer un post
router.delete("/deletepost/:id", auth, multer, postCtrl.deletePost);

module.exports = router;
