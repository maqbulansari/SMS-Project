const mongoose = require("mongoose");

const TeacherSchema = mongoose.Schema({
    user_id:mongoose.Schema.Types.ObjectId,
    adh_no:{
        type:Number,
        minlength:12,
        maxlength:12,
        required:true
    },
    pen_no:{
        type:Number,
        minlength:10,
        maxlength:10,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
})
module.exports = mongoose.model("TeacherData",TeacherSchema)