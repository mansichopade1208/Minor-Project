const express = require("express");
const prouter = express.Router();
const Place = require("../models/Place");

// Get all places
prouter.get("/", async (req, res) => {
  const places = await Place.find();
  res.json(places);
});

module.exports = router;