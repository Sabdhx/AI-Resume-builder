import { LayoutGrid } from 'lucide-react'
import { Button } from '../../ui/button'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useResume } from '../../../context/ResumeContext';
import ThemeColor from './ThemeColor';
import { Resume } from '../../../../dummyData/dummy';

type Props = {
  isOpen:boolean;
  resume:Resume
}

function SmallNavbar({isOpen,resume}:Props) {
  console.log("isOpen= ",isOpen)
  const navigate = useNavigate()
  const {componentNumber,decrementingComponentNumber , incrementingComponentNumber} = useResume();

  console.log(componentNumber)
  return (
    <div className='flex justify-between'>
      <div className='flex gap-4'>
      <div >
        <Button className=' bg-purple-500'  onClick={()=>navigate("/")}>home</Button>
      </div>
      <div>
        {/* <Button className=' flex gap-2 bg-purple-500' size="sm"> <LayoutGrid/> */}
        <ThemeColor  />
        {/* </Button> */}
      </div>
      </div>

      <div className='flex gap-4'>
      <div>
        <Button className='bg-purple-500' onClick={()=>decrementingComponentNumber()}>Previous</Button>
      </div>
      <div>
      <Button disabled={!isOpen} className='bg-purple-500'onClick={()=>incrementingComponentNumber()} > Next</Button>
      </div>
      </div>

    </div>
  )
}

export default SmallNavbar