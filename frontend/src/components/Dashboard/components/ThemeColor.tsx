import React, { useContext, useState } from 'react'
import { LayoutGrid } from 'lucide-react'
import { useParams } from 'react-router-dom'
import GlobalApi from '../../../../services/GlobalApi'
import { Resume } from '../../../../dummyData/dummy'
import { Button } from '../../ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { useResume } from '../../../context/ResumeContext'
import axios from 'axios'



function ThemeColor(resume:Resume) {
    const colors=[
        "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF",
        "#33FFA1", "#FF7133", "#71FF33", "#7133FF", "#FF3371",
        "#33FF71", "#3371FF", "#A1FF33", "#33A1FF", "#FF5733",
        "#5733FF", "#33FF5A", "#5A33FF", "#FF335A", "#335AFF"
    ]
   const {majorResume,setMajorResume}  = useResume()
    const [selectedColor,setSelectedColor]=useState();
    const {id} = useParams();
    console.log(id)
    const onColorSelect=(color)=>{
        setSelectedColor(color)
        setMajorResume({
            ...majorResume,
            themeColor:color
        });
        const data={
         
                themeColor:color
           
        }
        GlobalApi.uploadPersonalInformation({id,data}).then(resp=>{
            console.log(resp);
        },(error:any)=>{
          console.log(error.message);
        })
        // const response  = axios.put(`http://localhost:1337/api/user-resumes/${id}`,{data})
    }

  return (
    <div className='bg-gray-300'>
    <Popover>
  <PopoverTrigger asChild>
  <Button variant="outline" size="sm" 
          className="flex gap-2" > <LayoutGrid/> Theme</Button>
  </PopoverTrigger>
  <PopoverContent>
    <h2 className='mb-2 text-sm font-bold'>Select Theme Color</h2>
    <div className='grid grid-cols-5 gap-3'>
        {colors.map((item,index)=>(
            <div 
            onClick={()=>onColorSelect(item)}
            className={`h-5 w-5 rounded-full cursor-pointer
             hover:border-black border
             ${selectedColor==item&&'border border-black'}
             `}
            style={{
                background:item
            }}>

            </div>
        ))}
    </div>
  </PopoverContent>
</Popover>
</div>
  )
}

export default ThemeColor