const express = require("express");
const route = express.Router();
const ClassPeriodController = require("../controllers/ClassPeriodCon.js")

route.post("/",ClassPeriodController.CreateClassPeriod)

module.exports = route