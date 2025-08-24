const mongoose = require("mongoose");

const StudentMarksSchema = new mongoose.Schema({
    exam_type_id:mongoose.Schema.Types.ObjectId,
    sub_id:mongoose.Schema.Types.ObjectId,
    sch_year_id:mongoose.Schema.Types.ObjectId,
    stu_id:mongoose.Schema.Types.ObjectId,
    teacher_id:mongoose.Schema.Types.ObjectId,
    marks_obtain:{
        type:Number,
        required:true
    },
})

module.exports = mongoose.model("StudentMarksData",StudentMarksSchema)