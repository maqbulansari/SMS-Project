const StudentData = require("../model/Student.js");

exports.GetAllStuInfo = async(req,res)=>{
    try {
         const students = await StudentData.aggregate([
      {
        $lookup: {
          from: 'userdatas',
          localField: 'user_id',
          foreignField: '_id',
          as: 'user_info'
        }
      },

      {
        $lookup: {
          from: 'addmissiondatas',
          localField: '_id',
          foreignField: 'student_id',
          as: 'addmission_info'
        }
      },

      {
        $lookup: {
          from: 'feerecorddatas',
          localField: '_id',
          foreignField: 'student_id',
          as: 'fee_records'
        }
      },
      {
        $lookup: {
          from: 'stuguardiandatas',
          localField: '_id',
          foreignField: 'stu_id',
          as: 'stu_guardians'
        }
      },
      {
        $lookup: {
          from: 'guardiandatas',
          localField: 'stu_guardians.Guar_id',
          foreignField: '_id',
          as: 'guardian_info'
        }
      },
      {
        $lookup: {
          from: 'studentyearlvldatas',
          localField: '_id',
          foreignField: 'stu_id',
          as: 'student_year_info'
        }
      },

      {
        $lookup: {
          from: 'yearlvldatas',
          localField: 'student_year_info.year_lvl_id',
          foreignField: '_id',
          as: 'year_level_info'
        }
      },

      {
        $lookup: {
          from: 'schoolyeardatas',
          localField: 'student_year_info.sch_year_id',
          foreignField: '_id',
          as: 'school_year_info'
        }
      }
    ]);

    res.status(200).json({msg:"success",students});
  } 
     catch (error) {
        res.status(500).json({ msg: "unsuccess", err: error.message })
    }
}