const multer = require("multer")
const storage = multer.memoryStorage();
const upload = multer({ storage });
const express = require("express");
const route = express.Router();
const UserController = require("../controllers/userCon.js");
const TokenVerift = require("../middleware/JWTveryfication.js");


route.post("/",  upload.single('file'),UserController.Director)
route.post("/login",UserController.LoginUser)

module.exports =route