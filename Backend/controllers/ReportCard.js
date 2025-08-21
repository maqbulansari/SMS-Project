const ReportCardData = require("../model/ReportCard.js");
const SubjectScoreData = require("../model/SubjectScore.js");
const StudentMarksData = require("../model/StudentMarks.js");
const StudentYearLvlData = require("../model/StudentYearlvl.js");
const StudentAttendanceData = require("../model/stuAttendance.js");

exports.createReportCard = async(req,res)=>{
    const {student_id} = req.body;
    try {
        const createstuMarks = await StudentMarksData.create(req.body);
        const findstuYrLvl = await StudentYearLvlData.findOne({student_id:_id});
        const findStudentAttendanceData = await StudentAttendanceData.find({$In:{student_id}});
        const createReportcard = await ReportCardData.create({...req.body,stu_lvl_id:findstuYrLvl._id,attendance_id:findStudentAttendanceData});
        const createSubScore = await SubjectScoreData.create({marks_ob_id:createstuMarks.Id,report_card_id:createReportcard._id})
        res.status(200).json("created reportCard successfully")

    } catch (error) {
         res.status(500).json({msg:"unsuccess Creating ReportCard",err:error.message})
    }
}