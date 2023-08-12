const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 8000;
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("./utils/pino");

require("./database/database");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", require("./routes/index"));

app.get("/", (req, res) => {
  logger.info(`${req.method}: ${req.originalUrl}`);
  res.send("Hello World!");
});

app.listen(PORT, (err) => {
  if (err) logger.error(err);
  else logger.info(`Server up and running at ${PORT}`);
});

module.exports = app;