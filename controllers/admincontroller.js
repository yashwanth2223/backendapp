const Admin = require ("../models/Admin")
const JobHunter=require("../models/JobHunter")
const Event=require("../models/Events")
const HeadHunter=require("../models/HeadHunter")

const multer = require('multer')
const path = require('path')
const fs = require('fs')


 const viewjobhunters = async (request,response) =>
 {
    try 
    {
        const jobhunters = await JobHunter.find()
        if(length==0)
        {
            response.send("DATA NOT FOUND");
        }
        else
        {
            response.json(jobhunters);
        }
    }
    catch(e)
    {
        response.status(500).send(e.message);
    }
 };

 const deletejobhunter = async (request, response) => 
 {
    try 
    {
      const email = request.params.email
      const jobseeker = await JobHunter.findOne({"email":email})
      if(jobseeker!=null)
      {
        await JobSeeker.deleteOne({"email":email})
        response.status(200).send("Job Hunter Deleted Successfully")
      }
      else
      {
        response.status(200).send("Job Hunter Email ID Not Found")
      }

    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };


  const viewjobhunterprofile = async (request, response) => 
   {
      try 
      {
        const email = request.params.email
        const jobseeker = await JobSeeker.findOne({email})
        if(jobseeker)
        {
          response.json(jobseeker)
        }
        else
        {
          return response.status(200).send('Job Hunter not found with the provided email id');
        }
        
      } 
      catch (error) 
      {
        response.status(500).send(error.message);
      }
    };


const checkadminlogin = async (request,response) =>{
    try 
    {
    const input =  request.body
    console.log(input)
    const admin = await Admin.findOne(input)
    response.json(admin)
    }
    catch(error)
    {
        response.status(500).send(error.message);
    }
};


 

 const addheadhunter = async (request, response) =>{
    try 
    {
        const input = await request.body;
        const headhunter = new HeadHunter(input);
        await headhunter.save();
        response.send('Succesfully Registered');
    }
    catch(error)
    {
        response.status(500).send(e.message);
    }
};

const viewheadhunter = async (request, response) => 
{
   try 
   {
     const recruiters = await HeadHunter.find();
     if(recruiters.length==0)
     {
       response.status(200).send("DATA NOT FOUND");
     }
     else
     {
       response.json(recruiters);
     }
   } 
   catch (error) 
   {
     response.status(500).send(error.message);
   }
 };

 const deleteheadhunter = async (request, response) => 
{
   try 
   {
     const uname = request.params.username
     const recruiter = await HeadHunter.findOne({"username":uname})
     if(recruiter!=null)
     {
       await Recruiter.deleteOne({"username":uname})
       response.status(200).send("Recruiter Deleted Successfully")
     }
     else
     {
       response.status(200).send("HeadHunter Username Not Found")
     }

   } 
   catch (error) 
   {
     response.status(500).send(error.message);
   }
 };


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './media/'); // Destination folder
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // File naming convention
    }
  });

const upload = multer({ storage: storage }).single('file');


const createevent = async (req, res) =>
    {
      try 
      {
        upload(req, res, async function (err) 
        {
          if (err) 
          {
            console.error(err);
            return res.status(500).send(err.message);
          }
          
          const { category, title, description, date, location } = req.body;
          const fileName = req.file ? req.file.filename : undefined; // Extracting file name
    
          const newEvent = new Event({
            category,
            title,
            description,
            date,
            location,
            file: fileName // Save only the file name
          });
    
          await newEvent.save();
          res.status(200).send('Event Created Successfully');
        });
      } 
      catch (error) 
      {
        console.error(error);
        res.status(500).send(error.message);
      }
    };

    const viewevents = async (req, res) => 
{
  try 
  {
    const events = await Event.find();
    res.status(200).json(events);
  } 
  catch (error) 
  {
    res.status(500).send(error.message);
  }
};

const eventimage = async (req, res) => 
{
  const filename = req.params.filename;
  const filepath = path.join(__dirname, '../media', filename);
  console.log(filepath)

    fs.readFile(filepath, (err, data) => {
      if (err) 
      {
        console.error(err);
        return res.status(500).send('Error reading image file');
      }
     
    const ext = path.extname(filename).toLowerCase();
    let contentType = 'application/octet-stream'; // Default to octet-stream (binary data)

if (ext === '.png') {
  contentType = 'image/png';
} else if (ext === '.jpg' || ext === '.jpeg') {
  contentType = 'image/jpeg';
} else if (ext === '.pdf') {
  contentType = 'application/pdf';
} else if (ext === '.txt') {
  contentType = 'text/plain';
}

    res.setHeader('Content-Type', contentType);
      res.send(data);
    })
}

 module.exports = {viewjobhunters, deletejobhunter,viewjobhunterprofile, checkadminlogin,addheadhunter,viewheadhunter,deleteheadhunter,createevent,viewevents,eventimage}