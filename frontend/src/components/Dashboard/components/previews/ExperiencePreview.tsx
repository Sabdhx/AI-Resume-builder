import React from 'react'
import { Resume } from '../../../../../dummyData/dummy'

type Props = {
  resume:Resume
}

function ExperiencePreview({resume}: Props) {
  return (
    
    <div>
      <div className='my-3'>
    <div className='text-xl font-medium'>{resume.experience[0]?.title}</div>
    <div className='flex justify-between'>
      <div>
        <h1>
        {resume?.experience[0].companyName}, {resume?.experience[0].city}, {resume?.experience[0].state} 
        </h1>
        </div>
      <div>
        <h1>{resume?.experience[0].startDate} {resume?.experience[0].currentlyWorking}</h1>
      </div>
    </div>
   <div className='my-3'>
    <h1>
      {resume.experience[0].workSummery}
    </h1>
   </div>

   </div>

   <div className='my-3'>
    <div className='text-xl font-medium'>{resume.experience[1]?.title}</div>
    <div className='flex justify-between'>
      <div>
        <h1>
        {resume?.experience[1].companyName}, {resume?.experience[1].city}, {resume?.experience[1].state} 
        </h1>
        </div>
      <div>
        <h1>{resume?.experience[1].startDate} {resume?.experience[1].currentlyWorking}</h1>
      </div>
    </div>
    <div>
    <h1>
      {resume.experience[0].workSummery}
    </h1>
   </div>
   </div>
    </div>
  )
}

export default ExperiencePreview