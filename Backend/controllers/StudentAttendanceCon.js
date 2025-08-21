
const StudentAttendanceData = require("../model/stuAttendance.js");

exports.CreateAttendance = async (req, res) => {
  try {
    const attendanceList = req.body; 

    const created = await StudentAttendanceData.insertMany(attendanceList);

    res.status(201).json({ msg: "success", data: created });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "unsuccess marking attendance",err:error.message });
  }
};

exports.getStudentsAttendance = async(req,res)=>{

  try {
    const getting = await StudentAttendanceData.aggregate([
      {
        $lookup: {
          from: 'studentdatas',
          localField: 'student_id',
          foreignField: '_id',
          as: 'stu_info'
        }
      },
      {
         $lookup: {
          from: 'userdatas',
          localField: 'stu_info.user_id',
          foreignField: '_id',
          as: 'user_info'
        }
      },
      {
        $lookup: {
          from: 'studentyearlvldatas',
          localField: 'student_id',
          foreignField: 'student_id',
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
    ]
    );
     res.status(201).json({ msg: "success",  getting });
  } catch (error) {
    res.status(500).json({ msg: "unsuccess getting attendance",err:error.message });
  }
}