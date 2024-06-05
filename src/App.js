import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from "./Layout";
import Home from "./Home";
import Blogs from "./Blogs";
import Contact from "./Contact";
function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="blogs" element={<Blogs/>}/>
        <Route path="contact" element={<Contact/>}/>

           
        
        </Routes>
        
        </BrowserRouter>
      
    </div>
  );
}

export default App;
