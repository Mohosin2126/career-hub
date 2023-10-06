import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../LocalStorage";
import AppliedJob from "../Components/AppliedJob";

const AppliedJobs = () => {
    const [appliedJobs,setAppliedJobs]=useState([])
    const jobs=useLoaderData()
    
    useEffect(()=>{
        const storedJobIds=getStoredJobApplication()
        if(jobs.length>0){
            const jobsApplied=jobs.filter(job=>storedJobIds.includes(job.id))
            setAppliedJobs(jobsApplied)
        }
    },[])
    return (
        <div>
            <div>
            <h1 className="text-center mx-20  my-10 text-3xl font-bold "> Applied Jobs</h1>
        </div>
        <div className="space-y-10 mb-20">
            {
                appliedJobs.map(job=><AppliedJob job={job} key={job.id}></AppliedJob>)
            }
        </div>
        </div>
    );
};

export default AppliedJobs;