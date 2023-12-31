import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';
import { saveJobApplication } from "../LocalStorage";


const JobDetails = () => {
    const jobs=useLoaderData()
    const {id}= useParams()
   const idInt=parseInt(id)
   const job=jobs.find(job=>job.id===idInt)
   
   const handledAppliedButton=()=>{
    saveJobApplication( idInt)

    swal("Thank you !", "we received your application!", "success");
   }
    return (
        <div className="mb-20">
            <div >
            <h1 className="text-center font-bold text-2xl my-10">Job Details Of {job.job_title}</h1>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
            <div className="md:col-span-3 space-y-5">
   <h1><span className="text-lg font-bold">Job Description:</span> {job.job_description}</h1>
   <h1><span className="text-lg font-bold">Job Responsibility:</span> {job.job_responsibility}</h1>
   <h1> <span className="text-lg font-bold">Educational Requirments:</span> {job.educational_requirements}  </h1>
   <h1><span className="text-lg font-bold">Experiences:</span> {job.experiences} </h1>
            </div>
<div className="ml-10 bg-gray-300 p-3">      
    <div className="border-b-2">
    <h1 className="text-center font-bold mb-1 ">Job Details</h1>
    </div>
   <div className="space-y-2 mt-2">
   <div className="flex gap-2">
     <img className="w-6 h-6" src="https://i.ibb.co/kGWVqyK/money.png" alt="" />
     <p ><span className="font-semibold">Salary:</span> {job.salary}</p>
     </div>
     <div className="flex gap-2">
     <img className="w-6 h-6" src="https://i.ibb.co/PgLR7ZZ/calendar.png" alt="" />
     <p><span className="font-semibold">Job Title:</span> {job.job_title}</p>
     </div>
   </div>
    <div className="border-b-2">
        <h1 className="text-center font-bold mb-1 mt-5">Contact Information</h1>
    </div>
    <div className="space-y-2 mt-2">

    <div className="flex gap-2 ">
     <img className="w-6 h-6" src="https://i.ibb.co/t8ZhWWT/phone.png" alt="" />
     <p><span className="font-semibold">Phone:</span> {job.contact_information.phone}</p>
     </div>
     <div className="flex gap-2">
     <img className="w-6 h-6" src="https://i.ibb.co/yQtvPvz/email.png" alt="" />
     <p><span className="font-semibold">Email:</span> {job.contact_information.email}</p>
     </div>
     <div className="flex gap-2">
     <img className="w-6 h-6" src="https://i.ibb.co/qxSMwY8/location2.png" alt="" />
     <p><span className="font-semibold">Address: </span>{job.contact_information.address}</p>
     </div>

    </div>
    <button onClick={handledAppliedButton} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex mx-auto mt-5 ">
 Apply
</button>

      </div>
        </div>
        </div>
    );
};

export default JobDetails;