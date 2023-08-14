const mongoose = require("mongoose");

const connection = mongoose.connect(process.env.MONGODB_URL).then((e) => console.log("MongoDB Connected"))

module.exports = connection;


