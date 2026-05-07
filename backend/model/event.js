const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: String,
  type: String, // festival / fair
  location: String,
  month: String,
  description: String,
  image: String
});

module.exports = mongoose.model("Event", eventSchema);