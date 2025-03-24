import React, { useState } from "react";
import { Resume } from "../../../../../dummyData/dummy";
import { Input } from "../../../ui/input";
import { Button } from "../../../ui/button";
import StarRating from "../Rating";
import GlobalApi from "../../../../../services/GlobalApi";
import { useParams } from "react-router-dom";
import { useResume } from "../../../../context/ResumeContext";



function Skills() {
  const [loading, setLoading] = useState(false);
  const {majorResume,setMajorResume,setIsOpen} = useResume()
  const {id} = useParams() as {id: string}
  const addNewSkill = () => {
    setMajorResume((prev) => ({
      ...prev,
      Skills: [
        ...prev.Skills,
        {
          id: prev.Skills.length,
          name: "",
          rating: 0,
        },
      ],
    }));
  };

  const removeButton = (item: any, index: number) => {
    const filteration = majorResume.Skills.filter((item, i) => {
      return index !== i;
    });
    setMajorResume({ ...majorResume, Skills: filteration });
  };

  const handleSave = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    setIsOpen(true);
    const data = { Skills: majorResume.Skills.map(({ id, ...rest }) => rest) };
    console.log(data)
    console.log(id);
    GlobalApi.uploadPersonalInformation({ id, data }).then(
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
      {majorResume?.Skills?.map((item, index:number) => (
        <div key={index} className="m-4 border p-3 rounded-xl shadow-lg   ">
          <div className="flex items-center gap-x-4 w-full">
            {/* Name Input Section */}
            <div className="flex-1">
              <label htmlFor={`name-${index}`} className="block mb-1">
                Name
              </label>
              <Input
                value={item.name}
                id={`name-${index}`}
                className="w-full max-w-[200px]" /* Adjust width as needed */
                name="name"
                required
                onChange={(e) => {
                  setMajorResume((prev) => ({
                    ...prev,
                    Skills: prev.Skills.map((skill, i) =>
                      index === i
                        ? { ...skill, [e.target.name]: e.target.value }
                        : skill
                    ),
                  }));
                }}
              />
            </div>

            {/* Rating Section */}
            <div className="flex items-center  p-2 rounded-md">
              <StarRating index={index} />
            </div>
          </div>

          <div className="">
            <Button className="m-4" onClick={() => removeButton(item, index)}>
              Delete
            </Button>
          </div>
        </div>
      ))}
      <div>
        <Button className="m-4" onClick={addNewSkill}>
          Add Skills
        </Button>
      </div>

      <Button className="bg-purple-500" type="submit" onClick={handleSave}>
        Save
      </Button>
    </form>
  );
}

export default Skills;
