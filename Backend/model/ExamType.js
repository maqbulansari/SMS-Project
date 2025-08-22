const mongoose = require("mongoose");

const ExamTypeSchema = new mongoose.Schema({

Exam_Type_name:{
        type:String,
        required:true }

})
module.exports = mongoose.model("ExamTypeData",ExamTypeSchema)