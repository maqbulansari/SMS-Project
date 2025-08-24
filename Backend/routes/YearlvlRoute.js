const express = require("express");
const route = express.Router();
const YearLvlController = require("../controllers/YearLvlCon.js");

route.post("/",YearLvlController.CreateYearLvl)
route.get("/",YearLvlController.getYearlvl)

module.exports =route