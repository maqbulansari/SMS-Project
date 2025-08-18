const express = require("express");
const route = express.Router();
const StudentAttendanceController = require("../controllers/StudentAttendanceCon.js");

route.post("/",StudentAttendanceController.CreateAttendance)

module.exports =route