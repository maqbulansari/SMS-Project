const mongoose = require("mongoose");

const ReportCardSchema = new mongoose.Schema({
stu_lvl_id:mongoose.Schema.Types.ObjectId,
total_marks:{
        type:Number,
        required:true
    },
max_marks:{
        type:Number,
        required:true
    },
percentage:{
        type:Number,
        required:true
    },
Grade:{
        type:String,
        required:true
    },
Division:{
        type:String,
        required:true
    },
attendance_id:[mongoose.Schema.Types.ObjectId],
teacher_remark:{
      type:String,
      required:true
},
promoted_to_cls_id:mongoose.Schema.Types.ObjectId,
sup_in:{
        type:Number,
        required:true
    },
sch_reopen:{
        type:Date,
        required:true
    },

})
module.exports = mongoose.model("ReportCardData",ReportCardSchema)