import React, { useState } from "react";
import { Textarea } from "../../../ui/text";
import { Resume } from "../../../../../dummyData/dummy";
import { Button } from "../../../ui/button";
import { AIchatSession } from "../../../../../services/GeminiAi";

type Props = {
  resume: Resume;
  setResume: React.Dispatch<React.SetStateAction<Resume>>;
};
const prompt: string =
  "generate 5 suggestion for summary of my resume my job title is {jobTitle}";
export default function Summary({ resume, setResume }: Props) {
   const [loading,setLoading] = useState(false)
  const handleAiGeneration = async() => {
    setLoading(true)
    const PROMPT = prompt.replace("{jobTitle}", resume.jobTitle);
    try {
      const callingApi =await AIchatSession.sendMessage(PROMPT);
      const result = callingApi.response.text();
    } catch (error) {
      
    }
  
    console.log(result);
    setLoading(true)

  };
  return (
    <div>
      <Button onClick={handleAiGeneration}>Generate AI Suggestion</Button>
      <label htmlFor="Summary">Summary</label>
      <Textarea
        id="Summary"
        value={resume.summery}
        onChange={(e) => setResume({ ...resume, summery: e.target.value })}
        rows={5}
        className="w-full p-2"
      />
    </div>
  );
}
