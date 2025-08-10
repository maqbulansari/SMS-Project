const mongoose = require("mongoose");

const StudentYearlvlSchema = new mongoose.Schema({
    stu_id:mongoose.Schema.Types.ObjectId,
    year_lvl_id:mongoose.Schema.Types.ObjectId,
    sch_year_id:mongoose.Schema.Types.ObjectId,
})

module.exports = mongoose.model("StudentYearlvlData",StudentYearlvlSchema)