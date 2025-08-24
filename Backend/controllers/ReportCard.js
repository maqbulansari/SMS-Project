const ReportCardData = require("../model/ReportCard.js");
const SubjectScoreData = require("../model/SubjectScore.js");
const StudentMarksData = require("../model/StudentMarks.js");
const StudentYearLvlData = require("../model/StudentYearlvl.js");

exports.createReportCard = async(req,res)=>{
    
    try {
        const {student_id} = req.body;
        const createstuMarks = await StudentMarksData.create(req.body);
        console.log("marks",createstuMarks);
        
        const findstuYrLvl = await StudentYearLvlData.findOne({stu_id:student_id});
        console.log("stulvl",findstuYrLvl);
        const createReportcard = await ReportCardData.create({...req.body,stu_lvl_id:findstuYrLvl._id});
        console.log("rpcrd",createReportcard);
        const createSubScore = await SubjectScoreData.create({marks_ob_id:createstuMarks._id,report_card_id:createReportcard._id})
        console.log("sccrd",createSubScore);
        res.status(200).json("created reportCard successfully")

    } catch (error) {
         res.status(500).json({msg:"unsuccess Creating ReportCard",err:error.message})
    }
}