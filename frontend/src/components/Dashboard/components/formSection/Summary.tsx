import React, { useState } from "react";
import { Textarea } from "../../../ui/text";
import { Resume } from "../../../../../dummyData/dummy";
import { Button } from "../../../ui/button";
import { AIchatSession } from "../../../../../services/GeminiAi";
import { Loader } from "lucide-react";
import GlobalApi from "../../../../../services/GlobalApi";
import { useResume } from "../../../../context/ResumeContext";
import { useParams } from "react-router-dom";



const prompt: string =
  "Job Title: {jobTitle} , Depends on job title give me list of summery for 3 experience levels, Mid Level and Fresher level in 3 -4 lines in array format, With summery and experience_level Field in JSON Format";

export default function Summary() {
  
  const [loading, setLoading] = useState(false);
  const [AiSummary, setAiSummary] = useState<any[]>([]);
  const [summery, setSummery] = useState("");
  const {majorResume,setMajorResume,setIsOpen} = useResume()
  const {id} = useParams() as {id: string}

  const handleAiGeneration = async () => {
    setLoading(true);
    const PROMPT = prompt.replace("{jobTitle}", majorResume?.jobTitle || "");

    try {
      const callingApi = await AIchatSession.sendMessage(PROMPT);
      const result = await callingApi.response.text();
      const parsedResult = JSON.parse(result);
      setAiSummary(parsedResult);
      console.log(parsedResult);
    } catch (error: any) {
      console.error("AI Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setIsOpen(true);
    
    GlobalApi.uploadPersonalInformation({id,  data: {summery}} ).then(
      (prev:any) => { 
        console.log(prev)
        setLoading(false);
      },
      (error: any) => {
        setLoading(false);
        console.log(error.message);
      }
    );

    setLoading(false);
  };

 console.log("summery",summery)

  const handleGenerateSummaryThroughGemini = (item: any) => {
    setMajorResume((prevResume) => ({
      ...prevResume,
      summery: item.summary,
    }));
    setSummery(item.summary);
  };

  return (
    <>
      <form onSubmit={handleSave}>
        <div className="flex justify-between">
          <div></div>
          <div>
            <Button onClick={handleAiGeneration} className="">
              {loading ? <Loader /> : "Generate AI Suggestion"}
            </Button>
          </div>
        </div>

        <label htmlFor="Summary" className="text-xl m-2">
          Summary
        </label>

        <Textarea
          id="Summary"
          name="summery"
          value={majorResume.summery || summery}
          onChange={(e)=>{
            const { name, value } = e.target;
            console.log(name)
            setMajorResume((prevResume) => ({
              ...prevResume,
              [name]: value,
            }));
            setSummery(
               value
           );
          }}
          rows={5}
          className="w-full p-2"
        />

        {AiSummary?.map((item: any, index: number) => (
          <div key={index} className="m-4 border p-3 rounded-xl shadow-lg border-t-4">
            <p
              className="text-xl cursor-pointer"
              onClick={() => handleGenerateSummaryThroughGemini(item)}
            >
              {item.summary}
            </p>
          </div>
        ))}

        <div className="flex justify-between my-3">
          <div></div>
          <div>
            <Button className="bg-purple-500" type="submit">
              Save
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
