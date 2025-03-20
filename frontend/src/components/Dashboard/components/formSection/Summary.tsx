import React, { useState } from 'react'
import { Textarea } from '../../../ui/text'
import { Resume } from '../../../../../dummyData/dummy'

type Props = {
  resume:Resume;
  setResume:React.Dispatch<React.SetStateAction<Resume>>
}

export default function Summary({resume,setResume}: Props) {
  return (
    <div>
      <label  htmlFor='Summary' >Summary</label>
      <Textarea  
  id="Summary"  
  value={resume.summery}  
  onChange={(e) => setResume({...resume, summery:e.target.value})}  
  rows={5}  
  className="w-full p-2"  
/>

    </div>
  )
}