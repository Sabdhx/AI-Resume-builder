import React from "react";
import { Resume } from "../../../../../dummyData/dummy";

type Props = {
  resume: Resume;
};

function SkillPreview({ resume }: Props) {
  return (
    <div className="grid grid-cols-2 gap-6 my-3">
      {resume.skills.map((item, index) => (
        <div key={index} className="flex items-center gap-4">
          <h1 className="w-1/3 text-lg font-semibold">{item.name}</h1>

          {item.rating !== "" && (
            <div className="w-2/3 bg-gray-300 h-4 rounded-full overflow-hidden">
              <div
                className={`h-full bg-[${resume.themeColor}]`}
                style={{ background: resume.themeColor, width:`${String(item.rating)}%` }}
              ></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default SkillPreview;
