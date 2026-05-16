const express = require("express");
const eRouter = express.Router();
const Event = require("../models/Event");
const eventsController = require("../controllers/events.js");

//get all events
eRouter.get("/", eventsController.allEvents);

eRouter.get("/detail/:id", eventsController.showEvent);

module.exports = eRouter;