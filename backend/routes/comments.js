const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

const commentCtrl = require("../controllers/comments");

// LES ROUTES VERS LES CONTROLLERS //
// creation commentaire
router.post("/:id/createcomment", auth, commentCtrl.createComment);
// mettre à jour le commentaire
router.put("/modifycomment/:id", auth, commentCtrl.modifyComment);
// obtenir tous les commentaires
router.get("/:id/comments", auth, commentCtrl.getAllComments);
// supprimer un commentaire
router.delete("/deletecomment/:id", auth, commentCtrl.deleteComment);

module.exports = router;
