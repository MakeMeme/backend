const express = require("express");
const controller = require("../controllers/meme.controller");
const router = express.Router();

router.post("/create", controller.createMeme);


module.exports = router;