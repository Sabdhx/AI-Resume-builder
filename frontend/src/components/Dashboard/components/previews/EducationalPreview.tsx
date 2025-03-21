import React from "react";
import { Resume } from "../../../../../dummyData/dummy";

type Props = {
  resume: Resume;
};

function EducationalPreview({ resume }: Props) {
  return (
    <div>
      {resume.education.map((edu, index) => (
        <div key={index} className="my-3">
          <div className="text-xl font-medium">{edu.universityName}</div>
          <div className="flex justify-between">
            <div>
              <h1>
                {edu.degree} in {edu.major}
              </h1>
            </div>

            <div>
              <h1>{edu.startDate} to {edu.endDate}</h1>
            </div>
          </div>
          <div className="my-3">
            <h1>{edu.description}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EducationalPreview;
