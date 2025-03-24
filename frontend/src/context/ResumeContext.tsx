import { createContext, useContext, useState, ReactNode } from "react";
import { Resume as ResumeType } from "../../dummyData/dummy"; // Ensure correct import

// Define the type for the context
interface ResumeContextType {
  componentNumber: number;
  setComponentNumber: React.Dispatch<React.SetStateAction<number>>;
  majorResume: ResumeType;
  setMajorResume: React.Dispatch<React.SetStateAction<ResumeType>>;
  incrementingComponentNumber: () => void;
  decrementingComponentNumber: () => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context with default values
const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

// Provider component
export const ResumeProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [componentNumber, setComponentNumber] = useState(0);
  const [majorResume, setMajorResume] = useState<ResumeType>({
    firstName: "",
    lastName: "",
    jobTitle: "",
    address: "",
    phone: "",
    email: "",
    themeColor: "#FF0000",
    summery: "",
    Experience: [
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
    Education: [
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
    Skills: [
      {
        id: 0,
        name: "",
        rating: "",
      },
    ],
  });

  const incrementingComponentNumber = () => {
    setComponentNumber((prev) => prev + 1);
    setIsOpen(false);
  };

  const decrementingComponentNumber = () => {
    setComponentNumber((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <ResumeContext.Provider
      value={{
        majorResume,
        setMajorResume,
        componentNumber,
        setComponentNumber,
        incrementingComponentNumber,
        decrementingComponentNumber,
        isOpen,
        setIsOpen,
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
    throw new Error("useResume must be used within a ResumeProvider");
  }
  return context;
};
