const express = require("express");
const route = express.Router();
const SubjectController = require("../controllers/SubjectCon.js");

route.post("/",SubjectController.CreateSubject)
route.get("/",SubjectController.GetSubjects)

module.exports =route