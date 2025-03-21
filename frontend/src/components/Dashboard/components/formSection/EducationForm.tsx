import React, { useState } from "react";
import { Input } from "../../../ui/input";
import { Button } from "../../../ui/button";
import { Resume } from "../../../../../dummyData/dummy";
import { Textarea } from "../../../ui/text";

type Props = {
  resume: Resume;
  setResume: React.Dispatch<React.SetStateAction<Resume>>;
};

function EducationForm({ resume, setResume }: Props) {
  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    setResume((prev) => ({
      ...prev,
      education: prev.education.map((item, i) =>
        i === index ? { ...item, [name]: value } : item
      ),
    }));
  };

  const handleChangeDate = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    setResume((prev) => ({
      ...prev,
      education: prev.education.map((item, i) =>
        i === index ? { ...item, [name]: value } : item
      ),
    }));
  };

  const handleAddExperience = () => {
    setResume((prevResume) => ({
      ...prevResume,
      education: [
        ...prevResume.education,
        {
          id: prevResume.education.length,
          universityName: "",
          startDate: "",
          endDate: "",
          degree: "",
          major: "",
          description: "",
        },
      ],
    }));
  };

  const deleteExperience = (index: number) => {
    setResume((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));
  };

  return (
    <div>
      {resume.education.map((item, index) => (
        <div key={index}>
          <div className="flex-1">
            <label htmlFor="universityName">University Name</label>
            <Input
              type="text"
              required
              id="universityName"
              name="universityName"
              value={item.universityName}
              onChange={(e) => handleOnChange(e, index)}
            />
          </div>

          <div className="flex justify-between gap-4 my-4">
            <div className="flex-1">
              <label htmlFor="degree">Degree</label>
              <Input
                type="text"
                required
                id="degree"
                name="degree"
                value={item.degree}
                onChange={(e) => handleOnChange(e, index)}
              />
            </div>

            <div className="flex-1">
              <label htmlFor="major">Major</label>
              <Input
                type="text"
                required
                id="major"
                name="major"
                value={item.major}
                onChange={(e) => handleOnChange(e, index)}
              />
            </div>
          </div>

          <div className="flex justify-between gap-4 my-4">
            <div className="flex-1">
              <label htmlFor={`start-date-${index}`}>Start Date</label>
              <input
                type="date"
                name="startDate"
                required
                id={`start-date-${index}`}
                value={item.startDate || ""}
                onChange={(e) => handleChangeDate(e, index)}
              />
            </div>

            <div className="flex-1">
              <label htmlFor="endDate">End Date</label>
              <input
                type="date"
                name="endDate"
                required
                id="endDate"
                value={item.endDate || ""}
                onChange={(e) => handleChangeDate(e, index)}
              />
            </div>
          </div>

          <label htmlFor="description">Description</label>
          <Textarea
            id="description"
            name="description"
            value={item.description}
            onChange={(e) => handleOnChange(e, index)}
            rows={5}
            className="w-full p-2"
          />

          <div className="my-3">
            <Button className="mx-4" onClick={() => deleteExperience(index)}>
              Remove
            </Button>
          </div>
        </div>
      ))}
      <Button className="mx-4" onClick={handleAddExperience}>
        Add More Experience
      </Button>
    </div>
  );
}

export default EducationForm;
