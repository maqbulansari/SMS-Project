const mongoose = require("mongoose");

const ExamPaperSchema = new mongoose.Schema({
exam_type_id:mongoose.Schema.Types.ObjectId,
term_id:mongoose.Schema.Types.ObjectId,
sub_id:mongoose.Schema.Types.ObjectId,
year_lvl_id:mongoose.Schema.Types.ObjectId,
total_marks:{
        type:Number,
        required:true
    },
paper_code:{
        type:Number,
        required:true
    },
teacher_id:mongoose.Schema.Types.ObjectId,
uploadfile:{
  filename: String,
  mimetype: String,
  size: Number,
  data: Buffer,
}

})
module.exports = mongoose.model("ExamPaperData",ExamPaperSchema)