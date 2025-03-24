import { useResume } from "../../../../context/ResumeContext"

 const SkillPreview=()=> {
  const {majorResume} = useResume()
  return (
    <>
    <div className='my-6'>
    <h2 className='text-center font-bold text-sm mb-2'
    style={{
        color:majorResume?.themeColor
    }}
    >Education</h2>
    <hr style={{
        borderColor:majorResume?.themeColor
    }} />

    <div className='grid grid-cols-2 gap-3 my-4'>
        {majorResume?.Skills.map((skill,index)=>(
            <div key={index} className='flex items-center justify-between'>
                <h2 className='text-xs'>{skill.name}</h2>
                <div className='h-2 bg-gray-200 w-[120px]'>
                    <div className='h-2'
                        style={{
                            backgroundColor:majorResume?.themeColor,
                            width:skill?.rating+'%'
                        }}
                    >
                    </div>
                </div>
            </div>
        ))}
    </div>
    </div>
    </>
  )
}

export default SkillPreview