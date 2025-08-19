const express = require("express");
const route = express.Router();
const FeeDepositeController = require("../controllers/FeedepositeCon.js")

route.post("/",FeeDepositeController.CreateFee)

module.exports = route