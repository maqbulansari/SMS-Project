const express = require("express");
const route = express.Router();
const UserController = require("../controllers/userCon.js");
const Protect = require("../middleware/JWTveryfication.js");

route.post("/login",UserController.LoginUser)

module.exports =route