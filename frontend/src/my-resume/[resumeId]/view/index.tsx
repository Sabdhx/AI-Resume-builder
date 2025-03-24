import { useEffect, useState } from "react";
import PreviewSection from "../../../components/Dashboard/components/PreviewSection/PreviewSection";
import { ResumeProvider, useResume } from "../../../context/ResumeContext";
import GlobalApi from "../../../../services/GlobalApi";
import { useParams } from "react-router-dom";
import { Button } from "../../../components/ui/button";

export default function MyResumeDownload() {
  const { id } = useParams() as { id: string };
  const { majorResume } = useResume();
  console.log(majorResume);
   
  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Hide the button in print mode */}
      <div className="print:hidden mb-4">
        <Button onClick={handleDownload}>Download</Button>
      </div>

      {/* Centering the PreviewSection */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 print:w-full print:max-w-full">
        <PreviewSection />
      </div>
    </div>
  );
}
