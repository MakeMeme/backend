const express = require("express");
const { checkDb, getUsers, getMemes } = require("../controllers/db.controller");
const router = express.Router();

router.get("/check", checkDb);
router.get("/users", getUsers);
router.get("/memes", getMemes);

module.exports = router;
