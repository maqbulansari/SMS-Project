const mongoose = require("mongoose");

const TermSchema = new mongoose.Schema({
year_id:mongoose.Schema.Types.ObjectId,
term_number:{
        type:Number,
        required:true
    },
Term_st_date:{
        type:Date,
        required:true
    },
term_end_date:{
        type:Date,
        required:true
    },

})
module.exports = mongoose.model("TermData",TermSchema)