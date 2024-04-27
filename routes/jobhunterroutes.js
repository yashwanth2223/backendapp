const jobhuntercontroller = require("../controllers/jobhuntercontroller")

const express = require("express")
const jobhunter = require("../models/JobHunter")
const jobhunterrouter = express.Router()

// job seekeer routes
jobhunterrouter.post("/insertjobhunter",jobhuntercontroller.insertjobhunter)
jobhunterrouter.post("/checkjobhunterlogin",jobhuntercontroller.checkjobhunterlogin)

jobhunterrouter.get("/viewjobsbyjobhunter",jobhuntercontroller.viewjobsbyjobhunter)
jobhunterrouter.post("/applyjobs",jobhuntercontroller.applyjob)


module.exports = jobhunterrouter