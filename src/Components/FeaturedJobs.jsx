import { useEffect } from "react";
import { useState } from "react";
import Job from "./Job";


const FeaturedJobs = () => {
    const [jobs,setJobs]=useState([])
    // this is not the best way 
    const [dataLength,setDatalength]=useState(4)
    useEffect(()=>{
        fetch("jobs.json")
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    return (
        <div className="my-20">
            <h1 className="text-center font-bold text-3xl">Featured Jobs</h1>
            <p className="text-center font-base my-2">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="lg:grid lg:grid-cols-2 gap-6 my-10">
    {
  jobs.slice(0,dataLength).map(job=><Job key={job.id} job={job}  ></Job>)
    }
            </div>
            <div className={dataLength===jobs.length ? 'hidden' :""}>
            <button onClick={()=>setDatalength(jobs.length)} className=" flex justify-center w-120 mx-auto    bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
  Show All 
</button>

            </div>
        </div>
    );
};

export default FeaturedJobs;