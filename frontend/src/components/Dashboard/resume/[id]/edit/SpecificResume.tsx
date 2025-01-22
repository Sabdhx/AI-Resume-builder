import { ResumeData } from '../../../components/AddResume'

type Props = {
  resume:ResumeData;
  id:string
}

function SpecificResume({resume,id}: Props) {
  console.log(resume)
  return (
    <div>
           
       <h1 className='mx-5 font-bold text-center'>{resume?.title}</h1>
    </div>
  )
}

export default SpecificResume