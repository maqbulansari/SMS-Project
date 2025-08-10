const mongoose = require("mongoose");

const SchoolYearSchema = mongoose.Schema({
    name:{
        type:String,
        st_date:{
           types:Date,
        },
        end_date:{
           type:Date,
        }
    }
})

module.exports = mongoose.model("SchoolYearData",SchoolYearSchema)