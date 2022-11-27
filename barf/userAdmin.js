const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userAdmin = new Schema(
  {
    account: {type: String},
    password: {type: String},
  }
);

// Export model
module.exports = mongoose.model("userAdmin", userAdmin);