const mongoose = require("mongoose");

const OfficeStaffSchema = new mongoose.Schema({
    user_id:mongoose.Schema.Types.ObjectId,
    date_join:{
        type:Date,
        required:true
    }
})
module.exports = mongoose.model("OfficeStaffData",OfficeStaffSchema)