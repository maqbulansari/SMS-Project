const mongoose = require("mongoose");

const ExamTypeSchema = new mongoose.Schema({

name:{
        type:String,
        required:true }

})
module.exports = mongoose.model("ExamTypeData",ExamTypeSchema)