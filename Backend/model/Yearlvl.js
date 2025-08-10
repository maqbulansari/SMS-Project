const mongoose = require("mongoose");

const YearlvlSchema = new mongoose.Schema({
    lvl_name:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model("YearlvlData",YearlvlSchema)