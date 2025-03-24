import React from 'react'
import { Resume } from '../../../../../dummyData/dummy'
import { useResume } from '../../../../context/ResumeContext'

const SummaryPreview = () => {
  const {majorResume} = useResume()
  return (
    <div className='font-medium my-3' >
      <h2>{majorResume.summery}</h2>
    </div>
  )
}
<div  />
export default SummaryPreview