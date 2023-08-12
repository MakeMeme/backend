const express = require("express");
const controller = require("../controllers/meme.controller");
const router = express.Router();

router.post("/create", controller.createMeme);
router.get("/get", controller.getMeme);

module.exports = router;
