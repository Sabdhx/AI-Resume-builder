import React, { useState } from "react";
import { Input } from "../../../ui/input";
import { Calendar } from "../../../ui/Calender";
import { Resume } from "../../../../../dummyData/dummy";


 type Experience = {
  id: number;
  title: string;
  companyName: string;
  city: string;
  state: string;
  startDate: string;
  endDate?: string;
  currentlyWorking: boolean;
  workSummery: string;
}

type Props = {
  experience: Experience;
  setResume: React.Dispatch<React.SetStateAction<Resume>>;
};
function ProfessionalExperience({ experience, setResume }: Props) {
  const [numberOfExperiences, setNumberOfExperiences] = useState(0);
 const [input,setInput] = useState("")


 console.log(experience.title)

  return (
    <div>
      <div className="flex justify-between gap-4 my-4">
        <div className="flex-1">
          <label htmlFor="First Name">Position Title</label>
          <Input
            type="text"
            required
            name="title"
            className=""
            id="Position title"
            // value={experience.title}
             onChange={(e)=>setInput(e.target.value)}
          />
        </div>

        <div className="flex-1">
          <label htmlFor="Last Name">Company Name</label>
          <Input
            type="text"
            required
            className=""
            // value={experience[numberOfExperiences].companyName}
            id="last Name"
            // onChange={(e)=>setResume({...resume,experience[numberOfExperiences].title:e.target.value})}
          />
        </div>
      </div>
      <div className="flex justify-between gap-4 my-4">
        <div className="flex-1">
          <label htmlFor="First Name">City</label>
          <Input
            type="text"
            required
            className=""
            id="Position title"
            // value={experience[numberOfExperiences].city}
            //  onChange={(e)=>setResume({...resume,firstName:e.target.value})}
          />
        </div>

        <div className="flex-1">
          <label htmlFor="Last Name">State</label>
          <Input
            type="text"
            required
            className=""
            // value={experience[numberOfExperiences].state}
            id="last Name"
           
          />
        </div>
      </div>
      <div className="flex justify-between gap-4 my-4">
        <div className="flex-1">
          <label htmlFor="Start date">Start Date</label>
          <Calendar
            required
            className=""
            id="Start date"
            // value={experience[numberOfExperiences].startDate ? new Date(experience[numberOfExperiences].startDate) : undefined}
            />
        </div>

        <div className="flex-1">
          <label htmlFor="End Date">End Date</label>
          <Calendar
            required
            className=""
            // value={experience[numberOfExperiences].startDate ? new Date(experience[numberOfExperiences].startDate) : undefined}
            id="End Date"
            // onChange={(e)=>setResume({...resume,experience[numberOfExperiences].title:e.target.value})}
          />
        </div>
      </div>



    </div>
  );
}

export default ProfessionalExperience;
