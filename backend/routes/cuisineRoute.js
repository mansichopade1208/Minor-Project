const express = require("express");
const cRouter = express.Router();
const Cuisine = require("../models/Cuisine");

//get all cuisines
cRouter.get("/", async (req, res) => {
//   const cusines = await Cusine.find();
//   res.json(cuisines);
    res.send("cuisine");
});

module.exports = cRouter;