require("dotenv").config()
const express = require("express");
const DBconnect = require("./utils/DBconnection");
const app = express();
app.use(express.json())
const PORT = process.env.PORT || 3000;
const RoleRoute = require("./routes/RoleRoute.js")
const UserRoute = require("./routes/UserRoute.js")
const AdmissionRoute = require("./routes/AddmissionRoute.js")
const RegisterRoute = require("./routes/RegisterRoute.js")

DBconnect()

app.use("/role",RoleRoute)
app.use("/user",UserRoute)
app.use("/user",AdmissionRoute)
app.use("/admin",RegisterRoute)

app.listen(PORT,()=>
console.log("running on port",PORT))