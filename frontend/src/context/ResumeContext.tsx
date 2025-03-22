import { createContext, useContext, useState, ReactNode } from "react";
import ResumeDataDummy from "../../dummyData/dummy";
import { Resume } from "../../dummyData/dummy";
// Define the type for the context

// Create the context with default values
interface ResumeContextType {
  componentNumber: number;
  setComponentNumber: React.Dispatch<React.SetStateAction<number>>;
  changingComponentNumber: () => void;
  majorResume: Resume;
  setMajorResume: React.Dispatch<React.SetStateAction<Resume>>;
  incrementingComponentNumber: () => void;
  decrementingComponentNumber: () => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

// Provider component
export const ResumeProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [majorResume, setMajorResume] = useState<Resume>({
    firstName: "",
    lastName: "",
    jobTitle: "",
    address: "",
    phone: "",
    email: "",
    themeColor: "#FF0000",
    summery: "",
    experience: [
      {
        id: 0,
        title: "",
        companyName: "",
        city: "",
        state: "",
        startDate: "",
        endDate: "",
        currentlyWorking: false,
        workSummery: "",
      },
    ],
    education: [
      {
        id: 0,
        universityName: "",
        startDate: "",
        endDate: "",
        degree: "",
        major: "",
        description: "",
      },
    ],
    skills: [
      {
        id: 0,
        name: "",
        rating: "",
      },
    ],
  });
  const [componentNumber, setComponentNumber] = useState(0);

  const incrementingComponentNumber = () => {
    setComponentNumber(componentNumber + 1);
    setIsOpen(false)
  };

  const decrementingComponentNumber = () => {
    setComponentNumber(componentNumber - 1);
  };
  return (
    <ResumeContext.Provider
  value={{
    majorResume,
    setMajorResume,
    componentNumber,
    setComponentNumber,  // ✅ Add this
    incrementingComponentNumber,
    decrementingComponentNumber,
    isOpen,
    setIsOpen,
    changingComponentNumber: () => {}, // ✅ Add this if not used yet
  }}
>
      {children}
    </ResumeContext.Provider>
  );
};

// Custom hook to use the context
export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error("there is no context");
  }
  return context;
};
