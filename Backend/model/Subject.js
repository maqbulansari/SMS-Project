const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
    department_name:{
        type:String,
        required:true
    },
    subject_name:{
        type:String,
        required:true
    },
}) 

module.exports = mongoose.model("SubjectData",SubjectSchema)