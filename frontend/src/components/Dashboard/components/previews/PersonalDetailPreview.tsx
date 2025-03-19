import { Resume } from '../../../../../dummyData/dummy'

type Props = {
  resume: Resume
}

function PersonalDetailPreview({resume}: Props) {
  console.log(resume)
  return (
    <div className=' text-center '>

    
    <div className={`text-3xl text-[${resume.themeColor}] font-bold`} style={{color:resume.themeColor}}>
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

    <div className={`flex justify-between bg-gray-500text-[${resume.themeColor}]`} >
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