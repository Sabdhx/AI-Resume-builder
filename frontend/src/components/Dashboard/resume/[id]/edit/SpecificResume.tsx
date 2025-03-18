import { useResume } from "../../../../../context/ResumeContext"
import EducationalPreview from "../../../components/previews/EducationalPreview";
import ExperiencePreview from "../../../components/previews/ExperiencePreview";
import PersonalDetailPreview from "../../../components/previews/PersonalDetailPreview";
import SkillPreview from "../../../components/previews/SkillPreview";
import SummaryPreview from "../../../components/previews/SummaryPreview";
import { Resume } from "../../../../../../dummyData/dummy";

function SpecificResume() {
  const { resumes } = useResume();
  console.log("specific "+resumes)
  return (
    <div className="flex justify-between mx-[10%]">
           
       <div className='flex-1 bg-gray-400'>
        hey nate
       </div>

       <div className='flex-1 bg-red-200'>
        <div>
        <PersonalDetailPreview resume={resumes}/>
        </div>
        <hr className="border-t-2 border-red-600 " />        <div>
        <SummaryPreview resume={resumes}/>
        </div>
        <div>
          <h1 className="text-2xl text-red-600 font-bold text-center">Professional Expression</h1>
          <hr className="border-t-2 border-red-600 my-2" /> 

        <ExperiencePreview resume={resumes}/>
        </div>

        <h1 className="text-2xl text-red-600 font-bold text-center">Education</h1>
          <hr className="border-t-2 border-red-600 my-2" /> 

        <div>
        <EducationalPreview resume={resumes}/>
        </div>
        <h1 className="text-2xl text-red-600 font-bold text-center my-4">Skills</h1>
        <hr className="border-t-2 border-red-600 my-2" /> 
        <div>
        <SkillPreview resume={resumes}/>
        </div>

        </div>
    </div>
  )
}

export default SpecificResume