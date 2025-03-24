import React, { useEffect, useState } from "react";
import { Rating as StarComponent } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useResume } from "../../../context/ResumeContext";

interface StarRatingProps {
  index: number;
}

const StarRating: React.FC<StarRatingProps> = ({ index }) => {
  const { setMajorResume, majorResume } = useResume();
  
  // Get the initial rating from state
  const [rating, setRating] = useState(majorResume?.Skills?.[index]?.rating / 20 || 0);

  useEffect(() => {
    if (rating !== undefined) {
      const convertingDegree = rating * 20;

      setMajorResume((prev) => ({
        ...prev,
        Skills: prev.Skills.map((skill, i) =>
          i === index ? { ...skill, rating: convertingDegree } : skill
        ),
      }));
    }
  }, [rating]); // Only run when rating changes

  return (
    <StarComponent
      style={{ maxWidth: 180 }}
      value={rating}
      onChange={setRating}
    />
  );
};

export default StarRating;
