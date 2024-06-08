import React, { useEffect, useState } from 'react'

export default function Home() {
const[count,setcount]=useState(0)
useEffect(()=>{
  const interval=setInterval(()=>{
    setcount((count)=> count+1);
  },1000);
  return()=>clearInterval(interval);
},[]);
  return (
    <div><p>Home</p>
    <p>I have rendered {count} seconds ago</p>
    </div>
  );
}

