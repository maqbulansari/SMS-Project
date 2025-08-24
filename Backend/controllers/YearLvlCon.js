const YearlvlData = require("../model/Yearlvl.js");

exports.CreateYearLvl = async (req,res) => {
    try {
        const createYearlvl = await YearlvlData.create(req.body);
        res.status(201).json({msg:"success",data:createYearlvl})
    } catch (error) {
         res.status(500).json({msg:"unsuccess adding subject"})
    }
}

exports.getYearlvl = async (req,res) => {
    try {
        const Yearlvl = await YearlvlData.find();
        res.status(200).json({msg:"success",data:Yearlvl})
    } catch (error) {
         res.status(500).json({msg:"unsuccess getting subject"})
    }
}