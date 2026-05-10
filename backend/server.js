const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const placeRoutes = require("./routes/placeroute");
const artRoutes = require("./routes/artroute");


const app = express();
app.use(cors());
app.use(express.json());

const upload = require("./middleware/upload");
app.use("/uploads", express.static("uploads"));



app.get('/', (req, res) => {
    res.send('MP Tourism API is running');
});

app.use("/api/places", placeRoutes);
app.use("/api/art", artRoutes);



console.log("MONGO URI =", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch(err => console.log(err));

