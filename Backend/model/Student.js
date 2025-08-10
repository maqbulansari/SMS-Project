const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    user_id: mongoose.Schema.Types.ObjectId,
    father_name:{
        type:String,
        required:true
    },
    mother_name:{
        type:String,
        required:true
    },
    date_of_birth:{
        type:Date
    }
})
module.exports = mongoose.model("StudentData",StudentSchema)