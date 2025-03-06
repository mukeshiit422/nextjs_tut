"use client"
import React, { useEffect } from 'react'

export default function Error({error}:{error: Error}) {
    useEffect(()=>{
        console.log("error>>",error);
    },[error])

  return (
    <div className='justify-center items-center'>
        <p className='text-red-500'> Error in loading users</p>
    </div>
  )
}
