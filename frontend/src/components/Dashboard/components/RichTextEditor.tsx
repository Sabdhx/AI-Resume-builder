import { useState } from "react";

import { Resume } from "../../../../dummyData/dummy";

type Props = {
  resume: Resume;
  setResume: React.Dispatch<React.SetStateAction<Resume>>;
};
export default function RichTextEditor({ resume, setResume }: Props) {
  function handleChanging(e:any) {
    console.log({e.target.e.target.value})
    // setResume((prev) => ({
    //   ...prev,
    //   experience: prev.experience.map((item, i) =>
    //     i === 0 ? { ...item, [e.target.name]: e.target.value } : item
    //   ),
    // }));
  }

  return (

  );
}
