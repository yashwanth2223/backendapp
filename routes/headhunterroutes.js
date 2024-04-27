const headhuntercontroller = require("../controllers/headhuntercontroller")

const express = require("express")
const headhunterrouter = express.Router()


headhunterrouter.post("/checkheadhunterlogin",headhuntercontroller.checkheadhunterlogin);

headhunterrouter.post("/addjob",headhuntercontroller.addjob);
headhunterrouter.get("/viewjobs/:runame",headhuntercontroller.viewjobs);

module.exports = headhunterrouter

