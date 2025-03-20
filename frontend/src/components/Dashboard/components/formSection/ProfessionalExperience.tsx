import React, { useState } from "react";
import { Input } from "../../../ui/input";
import { Button } from "../../../ui/button";
import Editor, {
  BtnBold,
  BtnBulletList,
  BtnClearFormatting,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnRedo,
  BtnStrikeThrough,
  BtnStyles,
  BtnUnderline,
  BtnUndo,
  HtmlButton,
  Separator,
  Toolbar,
} from "react-simple-wysiwyg";
import { Resume } from "../../../../../dummyData/dummy";

type Props = {
  resume: Resume;
  setResume: React.Dispatch<React.SetStateAction<Resume>>;
};

function ProfessionalExperience({ resume, setResume }: Props) {
  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    setResume((prev) => ({
      ...prev,
      experience: prev.experience.map((item, i) =>
        i === index ? { ...item, [name]: value } : item
      ),
    }));
  };

  const handleChangeDate = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    setResume((prev) => ({
      ...prev,
      experience: prev.experience.map((item, i) =>
        i === index ? { ...item, [name]: value } : item
      ),
    }));
  };

  const handleSummary = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const { value } = e.target;
    setResume((prev) => ({
      ...prev,
      experience: prev.experience.map((item, i) =>
        i === index ? { ...item, workSummery: value } : item
      ),
    }));
  };

  const handleAddExperience = () => {
    setResume((prevResume) => ({
      ...prevResume,
      experience: [
        ...prevResume.experience,
        {
          id: prevResume.experience.length,
          title: "",
          companyName: "",
          city: "",
          state: "",
          startDate: "",
          endDate: "",
          currentlyWorking: false,
          workSummery: "",
        },
      ],
    }));
  };

  const deleteExperience = (index: number) => {
    setResume((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));
  };

  return (
    <div>
      {resume.experience.map((item, index) => (
        <div key={index}>
          <div className="flex justify-between gap-4 my-4">
            <div className="flex-1">
              <label htmlFor={`position-title-${index}`}>Position Title</label>
              <Input
                type="text"
                required
                name="title"
                id={`position-title-${index}`}
                value={item.title}
                onChange={(e) => handleOnChange(e, index)}
              />
            </div>

            <div className="flex-1">
              <label htmlFor={`company-name-${index}`}>Company Name</label>
              <Input
                type="text"
                required
                id={`company-name-${index}`}
                name="companyName"
                value={item.companyName}
                onChange={(e) => handleOnChange(e, index)}
              />
            </div>
          </div>

          <div className="flex justify-between gap-4 my-4">
            <div className="flex-1">
              <label htmlFor={`city-${index}`}>City</label>
              <Input
                type="text"
                required
                id={`city-${index}`}
                name="city"
                value={item.city}
                onChange={(e) => handleOnChange(e, index)}
              />
            </div>

            <div className="flex-1">
              <label htmlFor={`state-${index}`}>State</label>
              <Input
                type="text"
                required
                id={`state-${index}`}
                name="state"
                value={item.state}
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
              <label htmlFor={`end-date-${index}`}>End Date</label>
              <input
                type="date"
                name="endDate"
                required
                id={`end-date-${index}`}
                value={item.endDate || ""}
                onChange={(e) => handleChangeDate(e, index)}
              />
            </div>
          </div>

          <Editor
            value={item.workSummery}
            name="workSummery"
            onChange={(e) => handleSummary(e as any, index)}
          >
            <Toolbar>
              <BtnBold />
              <BtnItalic />
              <BtnUnderline />
              <BtnStrikeThrough />
              <BtnNumberedList />
              <BtnBulletList />
              <BtnLink />
              <BtnClearFormatting />
              <HtmlButton />
              <BtnStyles />
              <Separator />
              <BtnUndo />
              <BtnRedo />
            </Toolbar>
          </Editor>

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

export default ProfessionalExperience;
