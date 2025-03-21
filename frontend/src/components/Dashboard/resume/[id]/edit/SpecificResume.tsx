import { useState } from "react";
import { useResume } from "../../../../../context/ResumeContext";
import EducationalPreview from "../../../components/previews/EducationalPreview";
import ExperiencePreview from "../../../components/previews/ExperiencePreview";
import PersonalDetailPreview from "../../../components/previews/PersonalDetailPreview";
import SkillPreview from "../../../components/previews/SkillPreview";
import SummaryPreview from "../../../components/previews/SummaryPreview";
import SmallNavbar from "../../../components/SmallNavbar";
import PersonalDetail from "../../../components/formSection/PersonalDetail";
import { Button } from "../../../../ui/button";
import Summary from "../../../components/formSection/Summary";
import ProfessionalExperience from "../../../components/formSection/ProfessionalExperience";
import { Resume } from "../../../../../../dummyData/dummy";
import EducationForm from "../../../components/formSection/EducationForm";
import Skills from "../../../components/formSection/Skills";

function SpecificResume() {
  const {  majorResume, setMajorResume } = useResume();
 
  const steps = [
    <PersonalDetail resume={majorResume} setResume={setMajorResume} />,
    <Summary resume={majorResume} setResume={setMajorResume} />,
    <ProfessionalExperience resume={majorResume} setResume={setMajorResume} />,
    <EducationForm resume={majorResume} setResume={setMajorResume} />,
    <Skills resume={majorResume} setResume={setMajorResume} />,
  ];

  const { componentNumber, incrementingComponentNumber } = useResume();
  const resumeThemeColor = majorResume.themeColor;

  const handleSave = () => {
    incrementingComponentNumber();
  };

  console.log(majorResume);

  return (
    <div className="flex justify-between mx-[10%]">
      {componentNumber < 5 ? (
        <>
          <div className="flex-1 ">
            <SmallNavbar />

            <div className="m-4 border p-3 rounded-xl shadow-lg border-t-4 border-purple-500">
              {steps[componentNumber]}
              <div className="flex justify-between m-2 ">
                <div></div>{" "}
                <div>
                  <Button className="bg-purple-500" onClick={handleSave}>
                    {componentNumber < 4 ? "Save" : "Submit"}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-red-200 px-9">
            <hr className={`mb-7 `} style={{ borderColor: resumeThemeColor }} />
            <div>
              <PersonalDetailPreview resume={majorResume} />
            </div>
            <hr
              className={`border-t-2 `}
              style={{ borderColor: resumeThemeColor }}
            />
            <div>
              <SummaryPreview resume={majorResume} />
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
              <ExperiencePreview resume={majorResume} />
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
              <EducationalPreview resume={majorResume} />
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
              <SkillPreview resume={majorResume} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex-1 bg-red-200 px-9">
            <hr className={`mb-7 `} style={{ borderColor: resumeThemeColor }} />
            <div>
              <PersonalDetailPreview resume={majorResume} />
            </div>
            <hr
              className={`border-t-2 `}
              style={{ borderColor: resumeThemeColor }}
            />
            <div>
              <SummaryPreview resume={majorResume} />
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
              <ExperiencePreview resume={majorResume} />
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
              <EducationalPreview resume={majorResume} />
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
              <SkillPreview resume={majorResume} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default SpecificResume;
