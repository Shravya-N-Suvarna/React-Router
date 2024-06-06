import React from 'react'
import { useState } from 'react'

export default function Counter() {
    const[counter,setCounter]=useState(0)
    const handleSubmit=()=>{
        setCounter(counter+1)
    }
    const handleSub=()=>{
        setCounter(counter-1)
    }

  return (
    <div>
        <p>{counter}</p>
        <button onClick={handleSubmit}>Increase</button>
        <button onClick={handleSub}>Decrease</button>
    </div>
  )
}
