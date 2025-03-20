import React, { useState } from "react";
import { Input } from "../../../ui/input";
import { Calendar } from "../../../ui/Calender";
import { Resume } from "../../../../../dummyData/dummy";
import RichTextEditor from "../RichTextEditor";

type Props = {
  resume: Resume;
  setResume: React.Dispatch<React.SetStateAction<Resume>>;
};
function ProfessionalExperience({ resume, setResume }: Props) {
  const [numberOfExperiences, setNumberOfExperiences] = useState(0);

  const handleOnChange = (e) => {
    setResume((prev) => ({
      ...prev,
      experience: prev.experience.map((item, i) =>
        i === 0 ? { ...item, [e.target.name]: e.target.value } : item
      ),
    }));
  };

  const handleChangeDate = (e: any) => {
    setResume((prev) => ({
      ...prev,
      experience: prev.experience.map((item, i) =>
        i === 0 ? { ...item, [e.target.name]: String(e.target.value)} : item
      ),
    }));
  };

  console.log(resume);
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
            value={resume.experience[0].title}
            onChange={(e) => {
              handleOnChange(e);
            }}
          />
        </div>

        <div className="flex-1">
          <label htmlFor="Last Name">Company Name</label>
          <Input
            type="text"
            required
            className=""
            id="last Name"
            name="companyName"
            value={resume.experience[0].companyName}
            onChange={(e) => {
              handleOnChange(e);
            }}
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
            value={resume.experience[0].city}
            name="city"
            onChange={(e) => {
              handleOnChange(e);
            }}
          />
        </div>

        <div className="flex-1">
          <label htmlFor="Last Name">State</label>
          <Input
            type="text"
            required
            className=""
            id="last Name"
            name="state"
            value={resume.experience[0].state}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
      </div>
      <div className="flex justify-between gap-4 my-4">
        <div className="flex-1">
          <label htmlFor="Start date">Start Date</label>
          <input
            type="date"
            name="startDate"
            required
            value={
              resume.experience[0]?.startDate
                ? new Date(resume.experience[0].startDate)
                : undefined
            }
            onChange={(e) => handleChangeDate(e)}
          />
        </div>

        <div className="flex-1">
          <label htmlFor="End Date">End Date</label>
          <input
            type="date"
            name="endDate"
            required
            value={
              resume.experience[0]?.endDate
                ? new Date(resume.experience[0].endDate)
                : undefined
            }
            onChange={(e) => handleChangeDate(e)}
          />
        </div>
      </div>
      <RichTextEditor resume={resume} setResume={setResume}/>
    </div>
  );
}

export default ProfessionalExperience;
