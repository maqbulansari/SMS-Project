const mongoose = require("mongoose");

const YearlvlFeeSchema = new mongoose.Schema({
    schoole_year_id:mongoose.Schema.Types.ObjectId,
    amount:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("YearlvlFeeData",YearlvlFeeSchema)