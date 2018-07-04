let mongoose = require("mongoose");

let Schema = mongoose.Schema;

const ListsSchema = new Schema({
  name: { type: String, index: { unique: true } },
  description: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("List", ListsSchema);
