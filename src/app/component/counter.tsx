'use client';
import React, { useState } from 'react'

export default function Counter() {
const[count, setCount] = useState(0);

  return (
    <div> 
        <h1>
         {count}
        </h1>
        <button
         onClick={()=>setCount(pre => pre+1)}
        > click me</button>
    </div>
  )
}
