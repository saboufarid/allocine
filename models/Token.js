let mongoose = require("mongoose");

let Schema = mongoose.Schema;

const TokenSchema = new Schema({
  token: { type: String, index: { unique: true } },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Token", TokenSchema);
