const express = require("express");
const route = express.Router();
const StudentController = require("../controllers/AllstudendCon.js")

route.get("/getstudent",StudentController.GetAllStuInfo)

module.exports = route