const express = require("express");
const route = express.Router();
const RoleController = require("../controllers/Rolecon.js")

route.post("/",RoleController.CreateRole)

module.exports = route