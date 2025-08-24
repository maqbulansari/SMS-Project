const ExamTypeData = require("../model/ExamType.js");

exports.getExamType = async(req,res)=>{

  try {
    const findexamType = await ExamTypeData.find();
      res.status(201).json({data:findexamType});
} catch (error) {
     res.status(500).json({msg:"unsuccess getting examtype",err:error.message})
}

}