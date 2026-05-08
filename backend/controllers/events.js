const Event = require("../models/Event");

module.exports.allEvents = async (req, res) => {
    const events = await Event.find({});
//   res.json(events);
    res.send("events");
};

module.exports.showEvent = async(req, res) => {
    let { id } = req.params;
    const event = await Event.findById(id);

    res.send("events by id")
};