import { useResume } from "../../../../../context/ResumeContext";
import EducationalPreview from "../../../components/previews/EducationalPreview";
import ExperiencePreview from "../../../components/previews/ExperiencePreview";
import PersonalDetailPreview from "../../../components/previews/PersonalDetailPreview";
import SkillPreview from "../../../components/previews/SkillPreview";
import SummaryPreview from "../../../components/previews/SummaryPreview";
import { Resume } from "../../../../../../dummyData/dummy";

function SpecificResume() {
  const { resumes } = useResume();
  console.log("specific " + resumes);
  const resumeThemeColor = resumes.themeColor;
  return (
    <div className="flex justify-between mx-[10%]">
      <div className="flex-1 bg-gray-400"></div>

      <div className="flex-1 bg-red-200 px-9">
        <hr className={`mb-7 `} style={{ borderColor: resumeThemeColor }} />
        <div>
          <PersonalDetailPreview resume={resumes} />
        </div>
        <hr
          className={`border-t-2 `}
          style={{ borderColor: resumeThemeColor }}
        />
        <div>
          <SummaryPreview resume={resumes} />
        </div>
        <div>
          <div
            className={` text-2xl font-bold text-center`}
            style={{color:resumeThemeColor}}
          >
            <h1>Professional Expression</h1>
          </div>
          <hr
            className={`border-t-2 `}
            style={{ borderColor: resumeThemeColor }}
          />
          <ExperiencePreview resume={resumes} />
        </div>
        <h1 className="text-2xl text-red-600 font-bold text-center"
        style={{color:resumeThemeColor}}
        >
          Education
        </h1>
        <hr
          className={`border-t-2 `}
          style={{ borderColor:resumeThemeColor }}
        />{" "}
        <div>
          <EducationalPreview resume={resumes} />
        </div>
        <h1 className="text-2xl  font-bold text-center my-4"
        style={{color:resumeThemeColor}}
        >
          Skills
        </h1>
        <hr
          className={`border-t-2 `}
          style={{ borderColor: resumeThemeColor }}
        />{" "}
        <div>
          <SkillPreview resume={resumes} />
        </div>
      </div>
    </div>
  );
}
export default SpecificResume;
