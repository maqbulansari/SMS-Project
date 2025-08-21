const mongoose = require("mongoose");

const ExamScheduleSchema = new mongoose.Schema({
year_lvl_id:mongoose.Schema.Types.ObjectId,
sch_year_id:mongoose.Schema.Types.ObjectId,
exam_type_id:mongoose.Schema.Types.ObjectId,
sub_id:mongoose.Schema.Types.ObjectId,
term_number:{
        type:Number,
        required:true
    },
exam_date:{
        type:Date,
        required:true
    },
st_time:{
        type:Date,
        required:true
    },
end_time:{
        type:Date,
        required:true
    },

})
module.exports = mongoose.model("ExamScheduleData",ExamScheduleSchema)