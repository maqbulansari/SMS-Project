const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
    department_name:{
        type:String,
        required:true
    },
    subject_name:{
        type:String,
        required:true
    },
}) 

module.exports = mongoose.Schema("subjectData",subjectSchema)