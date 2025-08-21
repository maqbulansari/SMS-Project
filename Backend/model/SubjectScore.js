const mongoose = require("mongoose");

const SubScoreSchema = new mongoose.Schema({
report_card_id:mongoose.Schema.Types.ObjectId,
marks_ob_id:mongoose.Schema.Types.ObjectId,

})
module.exports = mongoose.model("SubScoreData",SubScoreSchema)