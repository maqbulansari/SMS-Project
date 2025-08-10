const mongoose = require("mongoose");

const AdmissionSchema = new mongoose.Schema({
    student_id: mongoose.Schema.Types.ObjectId,
    admission_date:{
 type: Date,
 required:true
    },
    Pre_Sch_name:{
        type:String,
    },
    Pre_Std_name:{
        type:String,
    },
    tc_latter:{
        type:Boolean,
        default:false,
        required:true
    },
    guardian_id: mongoose.Schema.Types.ObjectId,
    year_lvl_id: mongoose.Schema.Types.ObjectId,
    sch_lvl_id: mongoose.Schema.Types.ObjectId,
    emr_c_number:{
    type:Number,
    required:true
    },
    address:{
        type:true,
        required:true
    }
}) 

module.exports = mongoose.model("AddmissionData",AdmissionSchema)