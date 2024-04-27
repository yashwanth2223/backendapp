const JobHunter = require("../models/JobHunter")
const JobApplicant = require("../models/JobApplicant")
const Job = require("../models/Job")


const insertjobhunter = async(request,response) =>{
    try
    {
        const input = request.body;
        const jobhunter = new JobHunter(input);
        await jobhunter.save();
        response.send("Successfull Registration");
    }
    catch(e)
    {
        response.status(500).send(e.message);
    }
};

const checkjobhunterlogin = async (request, response) =>
{
    try
    {
        const input = request.body
        const jobhunter = await JobHunter.findOne(input)
        response.json(jobhunter)
    }
    catch(error)
    {
        response.status(500).send(error.message);
    }
};

const viewjobsbyjobhunter = async (request, response) => 
 {
    try 
    {
      const jobs = await Job.find();
      if(jobs.length==0)
      {
        response.status(200).send("DATA NOT FOUND");
      }
      else
      {
        response.json(jobs);
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };

  const applyjob = async (request, response) => {
    try 
    {
      const input = request.body; // job id and job seeker mail id
      const alreadyapplied = await JobApplicant.findOne(input)
      if(!alreadyapplied)
      {
        const jobapplicant = new JobApplicant(input);
        await jobapplicant.save();
        response.status(200).send('Job Applied Successfully');
      }
      else
      {
        response.status(200).send('OOPS ... You have already applied for this Job');
      }
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
  };


module.exports = {insertjobhunter, checkjobhunterlogin,viewjobsbyjobhunter,applyjob}