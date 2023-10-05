import { Link } from "react-router-dom";


const Job = ({job}) => {
 const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description,job_responsibility,educational_requirements,experiences,contact_information,}=job
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img className="h-10 w-32 mt-5" src={logo} alt="Logo" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p className="text-lg">{company_name}</p>
    <div className="space-x-10 my-3">
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




    <div className="card-actions mt-5 ">
    <Link to={`/job/${id}`}> <button className="btn btn-primary">View Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Job;