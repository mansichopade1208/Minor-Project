const express = require("express");
const pRouter = express.Router();
const Place = require("../models/Place");
const placesController = require("../controllers/places.js");

// Get all places
pRouter.get("/", placesController.allPlaces);

pRouter.get("/:id", placesController.showPlace);

module.exports = pRouter;