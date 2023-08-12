const express = require("express");
const { getUsers } = require("../controllers/users.controller");
const { getMemes } = require("../controllers/memes.controller");
const controller = require("../controllers/db.controller");
const router = express.Router();

router.get("/check", controller.checkDb);
router.get("/users", getUsers);
router.get("/memes", getMemes);

module.exports = router;
