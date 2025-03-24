import { useEffect, useState } from "react";
import { useResume } from "../../../../context/ResumeContext";
import EducationalPreview from "../previews/EducationalPreview";
import ExperiencePreview from "../previews/ExperiencePreview";
import PersonalDetailPreview from "../previews/PersonalDetailPreview";
import SkillPreview from "../previews/SkillPreview";
import SummaryPreview from "../previews/SummaryPreview";
import { useParams } from "react-router-dom";
import GlobalApi from "../../../../../services/GlobalApi";
import { Resume } from "../../../../../dummyData/dummy";

function PreviewSection() {
  const { majorResume } = useResume();
  const resumeThemeColor = majorResume.themeColor;

  
  return (
    <>
      <div className="flex-1 bg-gray-100 px-9">
        <hr className={`mb-7 `} style={{ borderColor: resumeThemeColor }} />
        <div>
          <PersonalDetailPreview />
        </div>
        <hr
          className={`border-t-2 `}
          style={{ borderColor: resumeThemeColor }}
        />
        <div>
          <SummaryPreview />
        </div>
        <div>
          <div
            className={` text-2xl font-bold text-center`}
            style={{ color: resumeThemeColor }}
          >
            <h1>Professional Expression</h1>
          </div>
          <hr
            className={`border-t-2 `}
            style={{ borderColor: resumeThemeColor }}
          />
          <ExperiencePreview />
        </div>
        <h1
          className="text-2xl text-red-600 font-bold text-center"
          style={{ color: resumeThemeColor }}
        >
          Education
        </h1>
        <hr
          className={`border-t-2 `}
          style={{ borderColor: resumeThemeColor }}
        />{" "}
        <div>
          <EducationalPreview />
        </div>
        <h1
          className="text-2xl  font-bold text-center my-4"
          style={{ color: resumeThemeColor }}
        >
          Skills
        </h1>
        <hr
          className={`border-t-2 `}
          style={{ borderColor: resumeThemeColor }}
        />{" "}
        <div>
          <SkillPreview />
        </div>
      </div>
    </>
  );
}

export default PreviewSection;
