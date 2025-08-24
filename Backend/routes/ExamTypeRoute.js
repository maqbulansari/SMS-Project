const express = require("express");
const route = express.Router();
const examTypeController = require("../controllers/ExamTypeCon.js")

route.get("/",examTypeController.getExamType)

module.exports = route