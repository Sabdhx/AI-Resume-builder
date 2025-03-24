import React from 'react'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import { SignIn, UserButton, useUser } from "@clerk/clerk-react";

function Headers() {
   const navigate= useNavigate()
   const { user, isLoaded, isSignedIn } = useUser();
   return (

    <div className='p-3 px-5 flex justify-between shadow-md print:hidden'>
        <img src="/logo.svg" alt="" className='h-[50px] w-[50px]'/>
        {
            isSignedIn && isLoaded ? (
                <>
                <div className='flex gap-3 items-center'>
                                        <Button variant={'outline'} onClick={()=>navigate("/Dashboard")}>Dashboard</Button>
                                        <UserButton/>
                                        </div>

                </>
            ) : (
                <>
                                       <Button onClick={()=>navigate("/signIn")}>Get Started</Button>

                </>
            )
        }
        
    </div>

  )
}

export default Headers