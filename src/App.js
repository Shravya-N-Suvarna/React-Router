import React from "react";
import Counter from "./Counter";
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import Layout from "./Layout";
// import Home from "./Home";
// import Blogs from "./Blogs";
// import Contact from "./Contact";
function App() {
  
    // const myStyle={
    //   color:"white",
    //   backgroundColor:"pink",
    //   padding: "10px",
    //   fontFamily:"Sans-Serif"



    // };
  

  return (
    <div>
      <Counter/>
      {/* <h1 style={myStyle} >Hello Style!</h1>
      <p>
        Add a little Style!
      </p> */}
      {/* <h1 style ={{color:"red", backgroundColor: "blue"}}>Accelerlab Solutions</h1> */}

      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}></Route>
        <Route path="/" element={<Home/>}/>
        <Route path="blogs" element={<Blogs/>}/>
        <Route path="contact" element={<Contact/>}/>

           
        
        </Routes>
        
        </BrowserRouter> */}
      
    </div>
  );
}

export default App;
