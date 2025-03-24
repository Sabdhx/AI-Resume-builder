import { ReactNode, useEffect } from "react";
import { useResume } from "../../../../context/ResumeContext";
import SmallNavbar from "../SmallNavbar";
import PersonalDetail from "../formSection/PersonalDetail";
import Summary from "../formSection/Summary";
import ProfessionalExperience from "../formSection/ProfessionalExperience";
import EducationForm from "../formSection/EducationForm";
import Skills from "../formSection/Skills";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import PreviewSection from "../PreviewSection/PreviewSection";
import MyResumeDownload from "../../../../my-resume/[resumeId]/view";
function SpecificResume() {
  const { setMajorResume, componentNumber } = useResume();
  const {id} = useParams();
  const navigate = useNavigate()
  useEffect(() => {
    const gettingData = async () => {
      const response = await axios.get(
        `http://localhost:1337/api/user-resumes/${id}?populate=*`
      );
      const data = response.data.data;
      setMajorResume(data);
    };
    gettingData();
  }, []);
  const steps: ReactNode[] = [
    <PersonalDetail />,
    <Summary />,
    <ProfessionalExperience />,
    <EducationForm />,
    <Skills />,
    <Navigate to={`/my-resume/${id}/view`}/>
 ];




  return (
    <div className="flex justify-between mx-[10%]">
      <div className="flex-1 ">
        <SmallNavbar />

        <div className="m-4 border p-3 rounded-xl shadow-lg border-t-4 border-purple-500">
          {
          steps[componentNumber]
      
        } 
          <div className="flex justify-between m-2 ">
            <div></div>
          </div>
        </div>
      </div>

      <PreviewSection />
    </div>
  
  );
}
export default SpecificResume;
