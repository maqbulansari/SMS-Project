const TermData = require("../model/Term.js");
const ExamTypeData = require("../model/ExamType.js");
const ExamScheduleData = require("../model/ExamSchedule.js");
const ExamParerData = require("../model/ExamPaper.js");
const YearlvlData = require("../model/Yearlvl.js");
const schYearData = require("../model/SchoolYear.js");

exports.createExam = async(req,res)=>{
    const {lvl_name,name} = req.body;
      const exampaper = req.file;
    
       if (!exampaper) {
            return res.status(400).json({ error: 'plese upload exam paper' });
        }
  try {const findschYear = await schYearData.findOne({name});
      const createterm = await TermData.create({...req.body,year_id:findschYear._id});
      const createexamType = await ExamTypeData.create(req.body);
      const findYearlvl = await YearlvlData.findOne({lvl_name});
      const createexamSchedule = await ExamScheduleData.create({...req.body,exam_type_id:createexamType._id,year_lvl_id:findYearlvl._id,sch_year_id:findschYear._id});
      const createexamPaper = await ExamParerData.create({...req.body,exam_type_id:createexamType._id,term_id:createterm._id,year_lvl_id:findYearlvl._id,uploadfile:{
                filename: exampaper.originalname,
                mimetype: exampaper.mimetype,
                size: exampaper.size,
                data: exampaper.buffer,
            }});
      res.status(201).json("Exam Created Success");
} catch (error) {
     res.status(500).json({msg:"unsuccess creating exam",err:error.message})
}

}