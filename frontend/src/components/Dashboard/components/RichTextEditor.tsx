import { useState } from "react";
import Editor, {
  BtnBold,
  BtnBulletList,
  BtnClearFormatting,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnRedo,
  BtnStrikeThrough,
  BtnStyles,
  BtnUnderline,
  BtnUndo,
  HtmlButton,
  Separator,
  Toolbar,
} from "react-simple-wysiwyg";
import { Resume } from "../../../../dummyData/dummy";

type Props = {
  resume: Resume;
  setResume: React.Dispatch<React.SetStateAction<Resume>>;
};
export default function RichTextEditor({ resume, setResume }: Props) {
  function handleChanging(e:any) {
    setResume((prev) => ({
      ...prev,
      experience: prev.experience.map((item, i) =>
        i === 0 ? { ...item, [e.target.name]: e.target.value } : item
      ),
    }));
  }

  return (
    <Editor value={resume.experience[0].workSummery} name="workSummery" onChange={(e)=>handleChanging(e)}>
      <Toolbar>
        <BtnBold />
        <BtnItalic />
        <BtnUnderline />
        <BtnStrikeThrough />
        <BtnNumberedList />
        <BtnBulletList />
        <BtnLink />
        <BtnClearFormatting />
        <HtmlButton />
        <BtnStyles />
        <Separator />
        <BtnUndo />
        <BtnRedo />
      </Toolbar>
    </Editor>
  );
}
