const express = require("express");
const route = express.Router();
const OfficeStaffController = require("../controllers/AllofficeStaffCon.js")

route.get("/getofficestaff",OfficeStaffController.AlloficeStaffInfo)

module.exports = route