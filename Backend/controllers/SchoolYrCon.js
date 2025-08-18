const SchoolYearData = require("../model/SchoolYear.js");

exports.CreateSchoolyear = async (req,res) => {
    try {
        const createSchyr = await SchoolYearData.create(req.body)
        res.status(201).json({msg:"success",data:createSchyr})
    } catch (error) {
         res.status(500).json({msg:"unsuccess adding schoolYear",err:error.message})
    }
}