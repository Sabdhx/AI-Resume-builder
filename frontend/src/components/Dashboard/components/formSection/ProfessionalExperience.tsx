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
import { AIchatSession } from "../../../../../services/GeminiAi";
import { Loader } from "lucide-react";

type Props = {
  resume: Resume;
  setResume: React.Dispatch<React.SetStateAction<Resume>>;
};

type AIWorkSummary = {
  summary: string;
  experience_level: string;
};

function ProfessionalExperience({ resume, setResume }: Props) {
  const [loading, setLoading] = useState(false);
  const [aiWorkSummery, setAiWorkSummery] = useState<AIWorkSummary[]>([]);

  const prompt: string =
    "Job Title: {jobTitle} , Depends on job title give me list of  summery for 3 experience level, Mid Level and Freasher level in 3 -4 lines in array format, With summery and experience_level Field in JSON Format";

  const handleAiGeneration = async () => {
    setLoading(true);
    const PROMPT = prompt.replace("{jobTitle}", resume?.jobTitle || "");

    try {
      const callingApi = await AIchatSession.sendMessage(PROMPT);
      const result = await callingApi.response.text();
      const parsedResult: AIWorkSummary[] = JSON.parse(result);
      setAiWorkSummery(parsedResult);
      console.log(parsedResult);
    } catch (error) {
      console.error("AI Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

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

  const handleSummaryGeneration = (summary: string, index: number) => {
    setResume((prevResume) => ({
      ...prevResume,
      experience: prevResume.experience.map((item, i) =>
        i === index ? { ...item, workSummery: summary } : item
      ),
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

          <div className="flex justify-between">
            <Button
              className="bg-purple-500 hover:bg-purple-400"
              onClick={handleAiGeneration}
            >
              {loading ? <Loader /> : "Generate AI Work Summary"}
            </Button>
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

          <label htmlFor="workSummery">Work Summary</label>
          <Editor
            value={item.workSummery}
            name="workSummery"
            id="workSummary"
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

          {aiWorkSummery.map((aiItem, aiIndex) => (
            <div
              key={aiIndex}
              className="m-4 border p-3 rounded-xl shadow-lg border-t-4"
            >
              <p
                className="text-md cursor-pointer"
                onClick={() => handleSummaryGeneration(aiItem.summary, index)}
              >
                {aiItem.summary}
              </p>
            </div>
          ))}

          <Button className="mx-4" onClick={() => deleteExperience(index)}>
            Remove
          </Button>
        </div>
      ))}
      <Button className="mx-4" onClick={handleAddExperience}>
        Add More Experience
      </Button>
    </div>
  );
}

export default ProfessionalExperience;
