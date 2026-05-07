const express = require("express");
const pRouter = express.Router();
const Place = require("../models/Place");

// Get all places
pRouter.get("/", async (req, res) => {
  const places = await Place.find();
  res.json(places);
});


module.exports = pRouter;