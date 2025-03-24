import React, { useState } from "react";
import { Input } from "../../../ui/input";
import { Button } from "../../../ui/button";
import { Textarea } from "../../../ui/text";
import GlobalApi from "../../../../../services/GlobalApi";
import { useResume } from "../../../../context/ResumeContext";
import { useParams } from "react-router-dom";

function EducationForm() {
    const [loading, setLoading] = useState(false);
    const {majorResume,setMajorResume,setIsOpen} = useResume()
  const {id} = useParams() as {id: string}
  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    setMajorResume((prev) => ({
      ...prev,
      Education: prev.Education.map((item, i) =>
        i === index ? { ...item, [name]: value } : item
      ),
    }));
  };

  const handleChangeDate = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    setMajorResume((prev) => ({
      ...prev,
      Education: prev.Education.map((item, i) =>
        i === index ? { ...item, [name]: value } : item
      ),
    }));
  };

  const handleAddExperience = () => {
    setMajorResume((prevResume) => ({
      ...prevResume,
      Education: [
        ...prevResume.Education,
        {
          id: prevResume.Education.length,
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
    setMajorResume((prev) => ({
      ...prev,
      Education: prev.Education.filter((_, i) => i !== index),
    }));
  };


const handleSave = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    setIsOpen(true);
    const data = {Education: majorResume.Education.map(({ id, ...rest }) => rest)};
    // console.log("Education",data)
    console.log(id)
    GlobalApi.uploadPersonalInformation({ id, data })
    .then(
      (prev: any) => {
        setLoading(false);
      },
      (error: any) => {
        setLoading(false);
        console.log(error.message);
      }
    );
};



  return (
    <form onSubmit={handleSave}>
      {majorResume?.Education?.map((item, index) => (
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


      <Button className="bg-purple-500" type="submit" onClick={handleSave}>
              Save
      </Button>

    </form>
  );
}

export default EducationForm;
