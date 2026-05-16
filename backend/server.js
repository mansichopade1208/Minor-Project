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
const hotelRouter=require("./routes/hotelRoute");
const chatRouter=require("./routes/chatbot");
const experienceRouter = require("./routes/experienceRoute");
// const weatherRouter = require("./routes/weatherRoutes.js") ;
const authRouter=require("./routes/auth")


app.use("/uploads", express.static("uploads"));

app.get('/', (req, res) => {
    res.send('MP Tourism API is running');
});

app.use("/destination", placeRouter);
app.use("/ai", itineraryRouter);
app.use("/api/art", artRouter);
app.use("/events",eventRouter);
app.use("/cuisines",cuisineRouter);
app.use("/hotels" , hotelRouter );
app.use("/ai",chatRouter);
<<<<<<< HEAD
app.use("/experiences", experienceRouter);
// app.use("/weather", weatherRouter);
=======
app.use("/auth",authRouter);

>>>>>>> 80ae705130c8564a2bf3a0ee3d11d41a97c72a97


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");

    const PORT = process.env.PORT || 8080;

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch(err => console.log(err));

