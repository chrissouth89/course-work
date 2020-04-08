const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  releaseYear: Number,
  mpaaRating: String,
  nowShowing: Boolean,
  cast: [String] // Array of Strings
});

module.exports = mongoose.model('Movie', movieSchema);
