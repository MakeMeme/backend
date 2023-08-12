const express = require("express");
const router = express.Router();

router.use("/db", require("./db.route"));
router.use("/meme", require("./meme.route"));

module.exports = router;
