const express = require("express");
const router = express.Router();

router.use("/db", require("./db.route"));

module.exports = router;
