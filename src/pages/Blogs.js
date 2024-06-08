import React, { useState } from 'react'

export default function Blogs() {
  // const[label,setlabel]=useState(localStorage.getItem("name"))
  const [name, setName] = useState("");
  const handleSubmit = () => { 
    localStorage.setItem("name", name);
    }
  return (
    <div>
      <form onClick={handleSubmit}>
        <label>Enter the Name: </label>
        <input type="text" name="name" onChange={(e) => {setName(e.target.value);
        }}/>
        <button type="submit">Submit</button>
      </form>
    <h1>{localStorage.getItem("name")}</h1>
    </div>
  )
}
