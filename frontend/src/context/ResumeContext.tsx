import { createContext, useContext, useState, ReactNode } from "react";
import ResumeDataDummy from "../../dummyData/dummy"
import {Resume} from "../../dummyData/dummy"
// Define the type for the context

// Create the context with default values
interface ResumeContextType {
  resumes: Resume;
  setResumes: React.Dispatch<React.SetStateAction<Resume>>;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

// Provider component
export const ResumeProvider = ({ children }: { children: ReactNode }) => {
  const [resumes, setResumes] = useState<Resume>(ResumeDataDummy);


  return (
    <ResumeContext.Provider value={{ resumes,setResumes }}>
      {children}
    </ResumeContext.Provider>
  );
};

// Custom hook to use the context
export const useResume=()=>{
  const context = useContext(ResumeContext);
  if(!context){
    throw new Error("there is no context");
  }
  return context
}