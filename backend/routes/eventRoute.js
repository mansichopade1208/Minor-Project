const express = require("express");
const eRouter = express.Router();
const Event = require("../models/Event");

//get all events
eRouter.get("/", async (req, res) => {
//   const events = await Event.find();
//   res.json(events);
    res.send("events");
});

module.exports = eRouter;