import React from 'react'
import { Resume } from '../../../../../dummyData/dummy'

type Props = {
  resume: Resume
}


const SummaryPreview = ({resume}: Props) => {
  return (
    <div className='font-medium my-3'>
      <h2>{resume.summery}</h2>
    </div>
  )
}

export default SummaryPreview