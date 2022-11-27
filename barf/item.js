const { Number } = require("mongoose");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const item = new Schema({
    name: {type: String},
    price: {type: Number},
    quatity:{type: Number},
    category:{type: String}
  }
);

// Export model
module.exports = mongoose.model("item", item);