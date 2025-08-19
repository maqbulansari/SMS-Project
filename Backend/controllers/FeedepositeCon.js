const FeeData = require("../model/FeeRecord.js");
const FeeRecYearLvlData = require("../model/fee_recored_yr_lvl_fee.js");
const YearLvlFeeData = require("../model/YearLevelFee.js");
const SchoolYearData = require("../model/SchoolYear.js");

exports.CreateFee = async (req,res) => {
    try {
        const {name} = req.body;
        const createFee = await FeeData.create(req.body);
        const findschyear = await SchoolYearData.findOne({name})
        const createyearlvlfee = await YearLvlFeeData.create({...req.body,schoole_year_id:findschyear._id});
        const createFeeLvlRec = await FeeRecYearLvlData.create({fee_rec_id:createFee._id,yearlvlfee_id:createyearlvlfee._id});
        res.status(201).json({msg:"success",data:createFee,createyearlvlfee,createFeeLvlRec});
    } catch (error) {
         res.status(500).json({msg:"unsuccess adding fee",err:error.message})
    }
}