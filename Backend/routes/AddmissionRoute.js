const express = require("express");
const route = express.Router();
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({storage});
const Protect = require("../middleware/JWTveryfication.js")
const addmissionController = require("../controllers/AdmissionCon.js")

route.post("/addmission",Protect,upload.single("file"),addmissionController.StudentAdmission)

module.exports = route