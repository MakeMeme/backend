const express = require("express");
const controller = require("../controllers/db.controller");
const router = express.Router();

router.get("/check", controller.checkDb);

module.exports = router;
