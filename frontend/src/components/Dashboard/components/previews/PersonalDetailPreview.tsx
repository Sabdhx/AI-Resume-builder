import React from 'react'
import { Resume } from '../../../../../dummyData/dummy'

type Props = {
  resume: Resume
}

function PersonalDetailPreview({resume}: Props) {
  console.log(resume)
  return (
    <div className=' text-center '>

    
    <div className='text-3xl text-red-600 font-bold'>
      <h1>{resume.firstName} {resume.lastName}</h1>
    </div>
    <div className='font-medium'>
      <h1>{resume.jobTitle}</h1>
    </div>
    <div>
      <h1 className='text-red-400'>
        {resume.address}
      </h1>
    </div>

    <div className='flex justify-between bg-gray-500 text-red-500 '>
    <div>
      <h1>{resume.phone}</h1>
    </div>
    <div>
      <h1>{resume.email}</h1>
    </div>
    </div>
    </div>
    
  )
}

export default PersonalDetailPreview