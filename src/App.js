import { BrowserRouter, Route, Routes } from "react-router-dom";
import File1 from "./File1";
import File2 from "./File2";
import File3 from "./File3";
import File4 from "./File4";


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<File1/>}/>
    <Route path="File2" element={<File2/>}/>
    <Route path="File3" element={<File3/>}/>
    <Route path="File4" element={<File4/>}/>
      
      </Routes>
    </BrowserRouter>
      
  
  );
}

export default App;
