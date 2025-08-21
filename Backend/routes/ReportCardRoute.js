const express = require("express")
const route = express.Router();
const ReportCardController = require("../controllers/ReportCard.js");

route.post("/",ReportCardController.createReportCard);
module.exports = route