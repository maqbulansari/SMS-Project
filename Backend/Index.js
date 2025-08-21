require("dotenv").config()
const express = require("express");
const DBconnect = require("./utils/DBconnection");
const app = express();
app.use(express.json())
const cors = require("cors")
app.use(cors())
const PORT = process.env.PORT || 3000;
const RoleRoute = require("./routes/RoleRoute.js")
const SubjectRoute = require("./routes/SubjectRoute.js")
const SchoolYearRoute = require("./routes/SchoolYrRoute.js")
const YearLvlRoute = require("./routes/YearlvlRoute.js")
const ClassPeriodRoute = require("./routes/ClassPeriodRoute.js")
const UserRoute = require("./routes/UserRoute.js")
const FeeDepositeRoute = require("./routes/FeeDepositeRoute.js")
const AdmissionRoute = require("./routes/AddmissionRoute.js")
const RegisterRoute = require("./routes/RegisterRoute.js")
const AllStudentRoute = require("./routes/AllStudentsRoute.js")
const AllTeacherRoute = require("./routes/AllteacherRoute.js")
const AllofficeStaffRoute = require("./routes/AlloficeStaffRoute.js")
const StudentAttendanceRoute = require("./routes/StuAttendanceRoute.js")
const ExamRoute = require("./routes/ExamRoute.js")
const ReportCardRoute = require("./routes/ReportCardRoute.js")

DBconnect()

app.use("/role",RoleRoute)
app.use("/user",UserRoute)
app.use("/sub",SubjectRoute)
app.use("/schyear",SchoolYearRoute)
app.use("/yrlvl",YearLvlRoute)
app.use("/class",ClassPeriodRoute)
app.use("/fee",FeeDepositeRoute)
app.use("/user",AdmissionRoute)
app.use("/admin",RegisterRoute)
app.use("/admin",AllStudentRoute)
app.use("/admin",AllTeacherRoute)
app.use("/admin",AllofficeStaffRoute)
app.use("/attendance",StudentAttendanceRoute)
app.use("/exam",ExamRoute)
app.use("/reportcard",ReportCardRoute)


app.listen(PORT,()=>
console.log("running on port",PORT))