import React, { useState } from "react";
import { Resume } from "../../../../../dummyData/dummy";
import { Input } from "../../../ui/input";
import { Button } from "../../../ui/button";
import StarRating from "../Rating";
import GlobalApi from "../../../../../services/GlobalApi";

type Props = {
  resume: Resume;
  setResume: React.Dispatch<React.SetStateAction<Resume>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
};

function Skills({ resume, setResume ,isOpen,setIsOpen,id}: Props) {
  const [loading, setLoading] = useState(false);

  const addNewSkill = () => {
    setResume((prev) => ({
      ...prev,
      skills: [
        ...prev.skills,
        {
          id: prev.skills.length,
          name: "",
          rating: "",
        },
      ],
    }));
  };

  const removeButton = (item: any, index: number) => {
    const filteration = resume.skills.filter((item, i) => {
      return index !== i;
    });
    setResume({ ...resume, skills: filteration });
  };

  const handleSave = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    setIsOpen(true);
    const data = { Skills: resume.skills.map(({ id, ...rest }) => rest) };
    // console.log("Education",data)
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
      {resume.skills.map((item, index) => (
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
                  setResume((prev) => ({
                    ...prev,
                    skills: prev.skills.map((skill, i) =>
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
              <StarRating resume={resume} setResume={setResume} index={index} />
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
          Add skills
        </Button>
      </div>

      <Button className="bg-purple-500" type="submit" onClick={handleSave}>
        Save
      </Button>
    </form>
  );
}

export default Skills;
