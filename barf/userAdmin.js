const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema(
  {
    account: {type: String},
    password: {type: String},
  }
);

// Export model
module.exports = mongoose.model("userAdmin", BookSchema);