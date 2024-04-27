const admincontroller = require("../controllers/admincontroller")

 const express = require("express")
 const adminrouter = express.Router()

 adminrouter.get("/viewjobhunters",admincontroller.viewjobhunters)
 adminrouter.delete("/deletejobhunters/:email",admincontroller.deletejobhunter)
 adminrouter.get('/viewjobhunterprofile/:email',admincontroller.viewjobhunterprofile)


 adminrouter.post("/checkadminlogin",admincontroller.checkadminlogin)


 adminrouter.post('/addheadhunter',admincontroller.addheadhunter)
 adminrouter.get('/viewheadhunter',admincontroller.viewheadhunter)
 adminrouter.delete('/deleteheadhunter',admincontroller.deleteheadhunter)


 adminrouter.post('/createevent',admincontroller.createevent)
 adminrouter.get('/viewevents',admincontroller.viewevents)
 adminrouter.get('/eventimage',admincontroller.eventimage)

 module.exports=adminrouter