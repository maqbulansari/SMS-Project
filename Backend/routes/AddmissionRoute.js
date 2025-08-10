const express = require("express");
const route = express.Router();
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({storage});
const addmissionController = require("../controllers/AdmissionCon.js")

route.post("/addmission",upload.single("file"),addmissionController.StudentAdmission)

module.exports = route