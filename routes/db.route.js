const express = require("express");
const { checkDb } = require("../controllers/db.controller");
const router = express.Router();

router.get("/check", checkDb);

module.exports = router;
