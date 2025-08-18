const express = require("express");
const route = express.Router();
const YearLvlController = require("../controllers/YearLvlCon.js");

route.post("/",YearLvlController.CreateYearLvl)

module.exports =route