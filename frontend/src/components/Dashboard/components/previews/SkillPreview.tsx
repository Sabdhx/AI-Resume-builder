import React from "react";
import { Resume } from "../../../../../dummyData/dummy";

type Props = {
  resume: Resume;
};

function SkillPreview({ resume }: Props) {
  return (
    <div className="grid grid-cols-2 gap-6">
      {resume.skills.map((item, index) => (
        <div key={index} className="flex items-center gap-4">
          <h1 className="w-1/3 text-lg font-semibold">{item.name}</h1>
          <div className="w-2/3 bg-gray-300 h-4 rounded-full overflow-hidden">
            <div className="bg-red-600 h-full w-[80%]"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillPreview;
