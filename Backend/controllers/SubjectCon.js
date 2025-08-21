const SubjectData = require("../model/Subject.js");

exports.CreateSubject = async (req,res) => {
    try {
        const createSub = await SubjectData.create(req.body)
        res.status(201).json({msg:"success",data:createSub})
    } catch (error) {
         res.status(500).json({msg:"unsuccess adding subject"})
    }
}


exports.GetSubjects = async(req,res)=>{

    try {
         const getSub = await SubjectData.find();
         res.status(200).json({msg:"success",data:getSub})
    } catch (error) {
          res.status(500).json({msg:"unsuccess getting subject"})
    }
}