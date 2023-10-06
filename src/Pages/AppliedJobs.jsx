import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../LocalStorage";
import AppliedJob from "../Components/AppliedJob";

const AppliedJobs = () => {
    const [appliedJobs,setAppliedJobs]=useState([])
    const [displayJob,setDisplayJob]=useState([])
    const jobs=useLoaderData()
    
    useEffect(()=>{
        const storedJobIds=getStoredJobApplication()
        if(jobs.length>0){
            const jobsApplied=jobs.filter(job=>storedJobIds.includes(job.id))
            setAppliedJobs(jobsApplied)
            setDisplayJob(jobsApplied)
        }
    },[])
    return (
        <div>
            <div>
            <h1 className="text-center mx-20  my-10 text-3xl font-bold "> Applied Jobs</h1>
        </div>
        <div className="text-end"> 
        <details className="dropdown ">
  <summary className="m-1 btn">Filter</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><a>All</a></li>
    <li><a>Remote</a></li>
    <li><a>Onsite</a></li>
  </ul>
</details>
        </div>
        <div className="mb-20">
            {
                appliedJobs.map(job=><AppliedJob job={job} key={job.id}></AppliedJob>)
            }
        </div>
        </div>
    );
};

export default AppliedJobs;