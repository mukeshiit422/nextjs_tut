"use client"

import { useRouter } from 'next/navigation';
import React from 'react'

export default function About() {
    const route = useRouter();
  return (
    <div className='flex flex-col'>
        <p>about page</p>
        <button onClick={()=>route.push("/")} className='font-bold text-blue-500 rounded-b-md'>
            Go to Home
        </button>
    </div>
    
  )
}
