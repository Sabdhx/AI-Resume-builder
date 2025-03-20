import { useState } from "react"
import { Input } from "../../../ui/input"
import { Button } from "../../../ui/button";
import { Resume } from "../../../../../dummyData/dummy";

type Props ={
  resume:Resume;
  setResume: React.Dispatch<React.SetStateAction<Resume>>
}


function PersonalDetail({resume,setResume}:Props) {
  return (
    <div className=" px-3 ">
      <h1 className="text-2xl font-medium">Personal Detail</h1>
      <h1 className="text-xl ">Get Started with the information</h1>
      <div className="flex justify-between gap-4">
        <div className="flex-1">
        <label htmlFor="First Name"        
        >First Name</label>
        <Input type="text" required className="" id="First Name" value={resume.firstName}  onChange={(e)=>setResume({...resume,firstName:e.target.value})} />
        </div>
     
        <div className="flex-1">      
            <label htmlFor="Last Name">Last Name</label>
        <Input type="text" required className="" value={resume.lastName} id="last Name" 
        onChange={(e)=>setResume({...resume,lastName:e.target.value})}
        />
        </div>

       </div>
       <div className="flex-1">      
            <label htmlFor="Job Title">Job Title</label>
        <Input type="text" required className="" value={resume.jobTitle} id="Job Title" 
        onChange={(e)=>setResume({...resume,jobTitle:e.target.value})}/>
        </div>
    
        <div className="flex-1">      
            <label htmlFor="Address">Address</label>
        <Input type="text" required className="" value={resume.address} id="Address" 
        onChange={(e)=>setResume({...resume,address:e.target.value})}/>
        </div>

        <div className="flex justify-between gap-4">
        <div className="flex-1">
        <label htmlFor="phone">Phone</label>
        <Input type="text" required className="" value={resume.phone} id="Phone" onChange={(e)=>{setResume({...resume,phone:e.target.value})}}/>
        </div>
     
        <div className="flex-1">      
            <label htmlFor="email">Email</label>
        <Input type="email" required className="" id="email" value={resume.email} onChange={(e)=>setResume({...resume,email:e.target.value})}/>
        </div>



      </div>
      
    </div>
  )
}

export default PersonalDetail