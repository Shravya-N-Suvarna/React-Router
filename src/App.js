import React from "react";
// import Counter from "./components/Counter";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
function App() {
  
    // const myStyle={
    //   color:"white",
    //   backgroundColor:"pink",
    //   padding: "10px",
    //   fontFamily:"Sans-Serif"



    // };
  

  return (
    <div>
      {/* <Counter/> */}
      {/* <h1 style={myStyle} >Hello Style!</h1>
      <p>
        Add a little Style!
      </p> */}
      {/* <h1 style ={{color:"red", backgroundColor: "blue"}}>Accelerlab Solutions</h1> */}

      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout/>}></Route> */}
        <Route path="/" element={<Layout><Home/></Layout>}/>
        <Route path="/blogs" element={<Layout><Blogs/></Layout>}/>
        <Route path="/contact" element={<Layout><Contact/></Layout>}/>
        <Route path="*" element={<div>Not found page</div>}/>

           
        
        </Routes>
        
        </BrowserRouter>
      
    </div>
  );
}

export default App;
