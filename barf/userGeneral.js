const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userGeneralSchema = new Schema(
  {
    account: {type: String},
    password: {type: String},
    name:{type:String}
  }
);

// Export model
module.exports = mongoose.model("usergeneral", userGeneralSchema);