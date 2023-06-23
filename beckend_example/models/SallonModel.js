const mongoose = require("mongoose");

// /////Sallon Schema/////
const SallonSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "A sallon must have a title"],
  },
  author: String,
  year: Number,
  category: String,
});

const Sallon = mongoose.model("Sallon", SallonSchema);

module.exports = Sallon;
