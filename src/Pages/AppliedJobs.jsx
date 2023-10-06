import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../LocalStorage";

const AppliedJobs = () => {
    const jobs=useLoaderData()
    console.log(jobs)
    useEffect(()=>{
        const storedJobIds=getStoredJobApplication()
        if(jobs.length>0){
            const jobsApplied=jobs.filter(job=>storedJobIds.includes(job.id))
            console.log(storedJobIds,jobsApplied)
        }
    },[])
    return (
        <div>
            
        </div>
    );
};

export default AppliedJobs;