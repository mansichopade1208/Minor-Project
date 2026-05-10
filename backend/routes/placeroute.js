const express = require("express");
const prouter = express.Router();
const Place = require("../models/place");
const upload = require("../middleware/upload");

prouter.get("/", async (req, res) => {
  try{
  const places = await Place.find();
  res.json(places);
  }catch(error){
     res.status(500).json({
      message: error.message
    });

  }
});


prouter.get("/:id", async (req,res)=>{

  try{
    const place=await Place.findById(req.params.id);
    if(!place){
      return res.status(404).json({
        message: "Place not found"
      });

    }
        res.json(place);
  }catch (error) {
        res.status(500).json({
          message: error.message
      });
  }
});

prouter.get("/category/:category", async (req, res) => {

  try {

    const category = req.params.category;

    const places = await Place.find({
      category: category
    })
  
    res.json(places);
  }catch(error){
    res.status(500).json({
      message: error.message
    })
  }
});
prouter.get("/type/:type", async (req, res) => {
  try {
    const type = req.params.type;

    const places = await Place.find({ type: type });

    res.json(places);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


prouter.post("/", upload.single("image"), async (req, res) => {
  try {
    const newPlace = new Place({
      name: req.body.name,
      category: req.body.category,
      type: req.body.type,
      location: req.body.location,
      description: req.body.description,

      image: req.file
        ? `/uploads/${req.file.filename}`
        : "",

      coordinates: {
        lat: req.body.lat,
        lng: req.body.lng,
      },

      transport: {
        nearestAirport: req.body.nearestAirport,
        nearestRailway: req.body.nearestRailway,
        roadAccess: req.body.roadAccess,
      },
    });

    await newPlace.save();

    res.status(201).json(newPlace);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = prouter;