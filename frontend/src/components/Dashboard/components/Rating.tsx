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
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const handleRating = () => {

      const convertingDegree:any | number = rating * 20
      setResume((prev) => ({
        ...prev,
        Skills: prev.Skills.map((skill, i) =>
          index === i ? { ...skill,rating:convertingDegree } : skill
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
