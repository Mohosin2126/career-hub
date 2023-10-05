import { useEffect } from "react";
import { useState } from "react";
import Job from "./Job";


const FeaturedJobs = () => {
    const [jobs,setJobs]=useState([])
    useEffect(()=>{
        fetch("jobs.json")
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    return (
        <div className="my-20">
            <h1 className="text-center font-bold text-3xl">Featured Jobs</h1>
            <p className="text-center font-base mt-2">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="">
    {
  jobs.map(job=><Job key={job.id} job={job}  ></Job>)
    }
            </div>
        </div>
    );
};

export default FeaturedJobs;