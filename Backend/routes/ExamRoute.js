const express = require("express")
const route = express.Router();
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({storage});
const ExamController = require("../controllers/ExamCon.js");

route.post("/",upload.single("exampaper"),ExamController.createExam)
module.exports = route