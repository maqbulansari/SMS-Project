const express = require("express");
const route = express.Router();
const multer = require("multer")
const storage = multer.memoryStorage();
const upload = multer({storage});
const RegisterController = require("../controllers/RegisterCon.js");
const Protect = require("../middleware/JWTveryfication.js");

route.post("/register",upload.single("file"),RegisterController.Register);

module.exports = route