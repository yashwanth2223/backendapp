const express = require("express")
const  mongoose = require("mongoose")
const cors = require("cors")



const app = express()
app.use(express.json())
app.use(cors())

const dburl = "mongodb://localhost:27017/democrmdb"
mongoose.connect(dburl).then(() =>{
    console.log("Connected to DataBase Successfully")
}).catch((err) =>{
    console.log(err.message)
});



const adminrouter = require("./routes/adminroutes")
const jobhunterrouter = require("./routes/jobhunterroutes");
const headhunterroutes=require('./routes/headhunterroutes');
const contactroutes=require('./routes/contactusroutes');




app.use("", adminrouter)
app.use("",jobhunterrouter)
app.use("",headhunterroutes)
app.use("",contactroutes)





const port=2033
app.listen(port,() =>{
    console.log(`Server is running at port ${port}`)
})

