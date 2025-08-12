const mongoose =require("mongoose");

const feeYr_lvl_fee = new mongoose.Schema({
    fee_rec_id: mongoose.Schema.Types.ObjectId,
    yearlvlfee : mongoose.Schema.Types.ObjectId,
})
module.exports =mongoose.model("feeYr_lvl_feeData",feeYr_lvl_fee)