const mongoose = require("mongoose");
const artSchema = new mongoose.Schema({
  name: String,
  type: String, // textile / painting / craft
  
  description: String,
  image: String
});

module.exports = mongoose.model("Art", artSchema);