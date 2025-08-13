const express = require("express");
const route = express.Router();
const TeachersController = require("../controllers/AllteacherCon.js")

route.get("/getteacher",TeachersController.AllteacherInfo)

module.exports = route