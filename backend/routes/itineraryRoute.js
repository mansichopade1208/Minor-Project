const express = require("express");

const router = express.Router();

const {
  generateItinerary,
} = require("../controllers/itinerary");

router.post(
  "/generate-itinerary",
  generateItinerary
);

module.exports = router;