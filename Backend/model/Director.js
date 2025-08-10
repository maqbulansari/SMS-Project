const mongoose = require("mongoose");

const DirectorSchema = new mongoose.Schema({
id:mongoose.Schema.Types.ObjectId,
user_id:mongoose.Schema.Types.ObjectId,
})
module.exports = mongoose.model("DirectorData",DirectorSchema)