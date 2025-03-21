import React, { useState } from "react";
import { Textarea } from "../../../ui/text";
import { Resume } from "../../../../../dummyData/dummy";
import { Button } from "../../../ui/button";
import { AIchatSession } from "../../../../../services/GeminiAi";
import { Loader } from "lucide-react";
import { previousDay } from "date-fns";

type Props = {
  resume: Resume;
  setResume: React.Dispatch<React.SetStateAction<Resume>>;
};
const prompt: string =
  "Job Title: {jobTitle} , Depends on job title give me list of  summery for 3 experience level, Mid Level and Freasher level in 3 -4 lines in array format, With summery and experience_level Field in JSON Format";
export default function Summary({ resume, setResume }: Props) {
  const [loading, setLoading] = useState(false);
  
  const [AiSummary, setAiSummary] = useState([]);

  const handleAiGeneration = async () => {
    setLoading(true);
    const PROMPT=prompt.replace('{jobTitle}',resume?.jobTitle);
    try {
      const callingApi = await AIchatSession.sendMessage(PROMPT);
      const result = await callingApi.response.text();
      const parsedResult = JSON.parse(result);
      setAiSummary(parsedResult);

      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };




  console.log(AiSummary);



  const handleGenerateSummaryThroughGemini = (item) => {
       console.log(item.summary)
       setResume({...resume,summery:item.summary })
  };

  return (
    <>
      <div>
        <Button onClick={handleAiGeneration}>
          {loading ? <Loader /> : "Generate AI Suggestion"}
        </Button>
        <label htmlFor="Summary">Summary</label>
        <Textarea
          id="Summary"
          value={resume.summery}
          onChange={(e) => setResume({ ...resume, summery: e.target.value })}
          rows={5}
          className="w-full p-2"
        />
        {AiSummary?.map((item, index) => {
          return (
            <div className="m-4 border p-3 rounded-xl shadow-lg border-t-4  ">
              <p
                className="text-xl  cursor-pointer"
                onClick={() => {
                  handleGenerateSummaryThroughGemini(item);
                }}
              >
                {item.summary}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
