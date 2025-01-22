import React from 'react'
import { ResumeData } from './AddResume';
import { Notebook } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type Props = {
  resume:ResumeData;
  id:string
}

function ResumeCards({resume,id}: Props) {
    const navigate = useNavigate()
    console.log(resume)
  return (
    <div key={id}>
        <div  onClick={navigate("/Dashboard/resume/${resp.data.data.documentId}/edit`)")} className="p-14 px-[100px] border items-center m-2 bg-secondary rounded-lg h-[280px] hover:scale-105 transition-all duration-400 hover:shadow-md cursor-pointer border-dashed flex justify-center items-center">
       <Notebook/>
      </div> 
      <h1 className='mx-5 font-bold text-center'>{resume?.title}</h1>

    </div>
  )
}

export default ResumeCards