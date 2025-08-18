const mongoose = require("mongoose");

const stuAttendanceSchema = new mongoose.Schema({
student_id: mongoose.Schema.Types.ObjectId,
status:{
     type:Boolean,
     required:true
},
sch_year_id: mongoose.Schema.Types.ObjectId,
markedAt:{
    type:Date
},
teacher_id: mongoose.Schema.Types.ObjectId,
year_lvl__id: mongoose.Schema.Types.ObjectId,

})

module.exports = mongoose.model("stuAttendanceData",stuAttendanceSchema)