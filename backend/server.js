const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const upload = require("./middleware/upload");
const placeRouter = require("./routes/placeroute");
const artRouter = require("./routes/artroute");
const itineraryRouter =require ("./routes/itineraryRoute");
const eventRouter=require("./routes/eventRoute");
const cuisineRouter=require("./routes/cuisineRoute");
const Cuisine = require('./models/Cuisine');


app.use("/uploads", express.static("uploads"));

app.get('/', (req, res) => {
    res.send('MP Tourism API is running');
});

app.use("/api/places", placeRouter);
app.use("/ai", itineraryRouter);
app.use("/api/art", artRouter);
app.use("events",eventRouter);
app.use("/cuisines",cuisineRouter);



mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch(err => console.log(err));

