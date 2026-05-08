const Cuisine = require("../models/Cuisine");

module.exports.allCusines = async (req, res) => {
    const cusines = await Cusine.find();
//   res.json(cuisines);
    res.send("cuisine");
};

module.exports.showCuisine = async(req, res) => {
    let { id } = req.params;
    const cuisine = await Cuisine.findById(id);

    res.send("cuisines by id");
}