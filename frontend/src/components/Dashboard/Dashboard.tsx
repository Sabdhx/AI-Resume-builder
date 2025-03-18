import React, { useEffect } from 'react'
import AddResume from './components/AddResume'
import axios from 'axios';

function Dashboard() {  
useEffect(()=>{
  const gettingData=async()=>{
          const data = await axios.get("http://localhost:1337/api/user-resumes");
          console.log(data)
  }
  gettingData()
})
  return (
       <>
       <div className="p-10 md:px-20 lg:px-30">
        <h2 className='font-bold text-3xl'>My Resume</h2>
        <p>start Creating AI resume to your next Job role</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10'>
          <AddResume/>
        </div>
       </div>
       </>
  )
}

export default Dashboard