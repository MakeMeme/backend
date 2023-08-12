const express = require("express");
const { checkDb } = require("../controllers/db.controller");
const { getUsers } = require("../controllers/users.controller");
const { getMemes } = require("../controllers/memes.controller");
const router = express.Router();

router.get("/check", checkDb);
router.get("/users", getUsers);
router.get("/memes", getMemes);

module.exports = router;
