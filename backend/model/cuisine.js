const mongoose = require("mongoose");
const cuisineSchema = new mongoose.Schema({
  name: String,
  city: String,
  description: String,
  image: String
});

module.exports = mongoose.model("Cuisine", cuisineSchema);