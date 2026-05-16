const express = require("express");
const arouter = express.Router();
const authmiddleware = require("../middleware/authmiddleware");

const {signup,login,} = require("../controllers/auth");

arouter.post("/signup", signup);
arouter.post("/login", login);
arouter.get("/profile",authmiddleware,
  (req, res) => {
    res.json({
      message: "Protected Route Accessed",
      user: req.user,
    });
  }
);

module.exports = arouter;