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

//homepage
app.get("/", async (req, res) => {
  res.json({
    message: "Homepage data",
  });
});

//routes
const placeRouter = require("./routes/placeRoute.js"); 
const artRouter = require("./routes/artRoute.js");
const eventRouter = require("./routes/eventRoute.js");
const cusineRouter = require("./routes/cuisineRoute.js");

const dbUrl = process.env.ATLASDB_URL;

main().then(() => {
    console.log("connected to DB")
})
.catch((err) => {
    console.log(err);
});

async function main () {
    await mongoose.connect(dbUrl);
};


// mongoose.connect(process.env.MONGO_URI)
// .then(() => console.log("MongoDB Connected"))
// .catch(err => console.log(err));

const PORT = 8080; //process.env.PORT || 

app.use("/places", placeRouter);
app.use("/arts", artRouter);
app.use("/events", eventRouter);
app.use("/cuisines", cusineRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});