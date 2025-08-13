const mongoose = require("mongoose");

const SchoolYearSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    st_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model("SchoolYearData",SchoolYearSchema)