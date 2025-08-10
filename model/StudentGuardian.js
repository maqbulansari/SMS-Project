const mongoose = require("mongoose");

const StuGuardianSchema = mongoose.Schema({
stu_id: mongoose.Schema.Types.ObjectId,
stuGuar_id: mongoose.Schema.Types.ObjectId,
})
module.exports = mongoose.model("StuGuardianData",StuGuardianSchema)