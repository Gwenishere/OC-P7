// on a besoin d'express afin de créer un routeur
const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");

const auth = require("../middleware/auth");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/", auth, userCtrl.getOneUser);
//router.put('/', auth, userCtrl.modifyUser);
router.delete("/", auth, userCtrl.deleteUser);

module.exports = router;
