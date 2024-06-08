import React from 'react'
import { useState } from 'react'

export default function Counter() {
    const[counter,setCounter]=useState(0)
    const handleIncrease=()=>{
        setCounter(counter+1)
    }
    const handleDecrease=()=>{
        setCounter(counter-1)
    }

  return (
    <div>
        <p>{counter}</p>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}
