import { useResume } from '../../../../context/ResumeContext'



function PersonalDetailPreview() {
  const {majorResume} = useResume()

  return (
    <div className=' text-center '>

    
    <div className={`text-3xl text-[${majorResume.themeColor}] font-bold`} style={{color:majorResume.themeColor}}>
      <h1>{majorResume.firstName} {majorResume.lastName}</h1>
    </div>
    <div className='font-medium'>
      <h1>{majorResume.jobTitle}</h1>
    </div>
    <div>
      <h1 className='text-red-400'>
        {majorResume.address}
      </h1>
    </div>

    <div className={`flex justify-between bg-gray-500text-[${majorResume.themeColor}]`} >
    <div>
      <h1>{majorResume.phone}</h1>
    </div>
    <div>
      <h1>{majorResume.email}</h1>
    </div>
    </div>
    </div>
    
  )
}

export default PersonalDetailPreview