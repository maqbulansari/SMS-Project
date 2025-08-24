const express = require("express");
const route = express.Router();
const SchoolYrController = require("../controllers/SchoolYrCon.js");

route.post("/",SchoolYrController.CreateSchoolyear)
route.get("/",SchoolYrController.getSchoolyear)

module.exports =route