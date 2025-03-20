import React from 'react';
import { Resume } from '../../../../../dummyData/dummy';

type Props = {
  resume: Resume;
};

function ExperiencePreview({ resume }: Props) {
  return (
    <div>
      {resume.experience.map((exp, index) => (
        <div key={exp.id} className="my-3">
          <div className="text-xl font-medium">{exp.title}</div>
          <div className="flex justify-between">
            <div>
              <h1>
                {exp.companyName}, {exp.city}, {exp.state}
              </h1>
            </div>
            <div>
              <h1>
                {exp.startDate} {exp.currentlyWorking ? " - Present" : ` - ${exp.endDate}`}
              </h1>
            </div>
          </div>
          <div className="my-3">
            <h1>{exp.workSummery}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperiencePreview;
