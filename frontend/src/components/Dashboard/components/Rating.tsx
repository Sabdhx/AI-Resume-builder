import React, { useEffect, useState } from "react";
import { Rating, Rating as StarComponent } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Resume } from "../../../../dummyData/dummy";

type Props={
  resume:Resume;
  setResume:React.Dispatch<React.SetStateAction<Resume>>;
  index:number;
}
const StarRating = ({resume,setResume,index}:Props) => {
  const [rating, setRating] = useState("");
  useEffect(() => {
    const handleRating = () => {
      setResume((prev) => ({
        ...prev,
        skills: prev.skills.map((skill, i) =>
          index === i ? { ...skill,rating } : skill
        ),
      }));
    };
    handleRating();
  }, [rating,setRating]);
  
  return (
    <StarComponent
      style={{ maxWidth: 180 }}
      value={rating}
      onChange={setRating}
    />
  );
};
export default StarRating;
