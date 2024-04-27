const HeadHuntur=require("../models/HeadHunter")
const Job=require("../models/Job")



const checkheadhunterlogin = async(request, response) =>
{
    try
    {
    const input = request.body
    const headhunter = await  HeadHuntur.findOne(input)
    response.json(headhunter)
    }
    catch(error)
    {
        response.status(500).send(error.message);
    }
};
const addjob = async (request, response) => {
    try 
    {
      const input = request.body;
      const job = new Job(input);
      await job.save();
      response.status(200).send('Job Posted Successfully');
    } 
    catch(e) 
    {
      console.log(e.message)
      response.status(500).send(e.message);
    }
  };

  
const viewjobs = async (request, response) => 
{
   try 
   {
     const runame = request.params.runame
     const jobs = await Job.find({"headhunter.username":runame});
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



module.exports = {checkheadhunterlogin,addjob,viewjobs}