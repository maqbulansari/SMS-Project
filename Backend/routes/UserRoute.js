const express = require("express");
const route = express.Router();
const UserController = require("../controllers/userCon.js");

route.post("/login",UserController.LoginUser)

module.exports =route