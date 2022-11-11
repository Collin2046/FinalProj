const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const heroSchema = new Schema(
  {
     id: {type:String},
        name: {type: String},
        localized_name: {type: String},
        primary_attr: {type: String},
        attack_type: {type: String},
        roles: [
            {type: String},
            {type: String},
            {type: String}
        ],
        legs: {type: String}
  }
);

// Export model
module.exports = mongoose.model("hero", heroSchema);