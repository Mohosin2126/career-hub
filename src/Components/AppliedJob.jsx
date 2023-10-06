

const AppliedJob = ({job}) => {
const {logo,job_title,company_name,remote_or_onsite,location,job_type,salary}=job
    return (
        <div className="w-full space-y-10 mb-10">
             <div className="flex justify-between items-center">
                <div className="flex  space-x-5">
<div className="h-60 w-60 bg-[#F4F4F4]">
<img className="w-36 h-12 my-28 mx-auto" src={logo} alt="" />
</div>
<div>
<h2 className="card-title mt-10">{job_title}</h2>
<p className="text-lg mt-5">{company_name}</p>
<div className="space-x-10 my-5">
    <button className="btn-sm btn  btn-outline btn-accent">{remote_or_onsite}</button>
        <button className="btn-sm btn btn-outline btn-accent ">{job_type}</button>
        
</div>
<div className="flex gap-10">
     <div className="flex gap-2">
     <img className="w-6 h-6" src="https://i.ibb.co/GWHgWtw/Location.png" alt="" />
     <p>{location}</p>
     </div>
     <div className="flex gap-2">
     <img className="w-6 h-6" src="https://i.ibb.co/09tqwkM/Frame.png" alt="" />
     <p> Salary: {salary}</p>
     </div>
</div>
    </div>
                </div>
                <div>
                <div className="card-actions mt-5 ">
     <button className="btn btn-primary">View Details</button>
    </div>
                </div>
             </div>
        </div>
    );
};

export default AppliedJob;