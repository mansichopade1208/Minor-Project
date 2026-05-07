const express = require("express");
const aRouter = express.Router();
const Art = require("../models/art");

aRouter.get("/", async (req, res) => {

  try {
    const arts = await Art.find();
    res.json(arts);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });

  }

});

aRouter.get("/:id", async (req, res) => {
  try {
    const art = await Art.findById(req.params.id);
    if (!art) {
      return res.status(404).json({
        message: "Art not found"
      });
    }
    res.json(art);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });

  }

});

aRouter.get("/type/:type", async (req, res) => {
  try {
    const type = req.params.type;
    const arts = await Art.find({
      type: type
    });
    res.json(arts);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }

});

module.exports = aRouter;
