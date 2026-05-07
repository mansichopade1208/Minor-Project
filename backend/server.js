const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('MP Tourism API is running');
});

//routes
const placeRouter = require("./routes/placeRoute.js"); 

// mongoose.connect(process.env.MONGO_URI)
// .then(() => console.log("MongoDB Connected"))
// .catch(err => console.log(err));

const PORT = 8080; //process.env.PORT || 

app.use("/places", placeRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});