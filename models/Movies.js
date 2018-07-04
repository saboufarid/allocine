let mongoose = require("mongoose");

let Schema = mongoose.Schema;

const MoviesSchema = new Schema({
  id: { type: Number, index: { unique: true } },
  original_title: String,
  poster_path: String,
  release_date: String,
  list: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lists"
  }
});

module.exports = mongoose.model("Movies", MoviesSchema);
