import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>     
        <Route path="/Home" element={<Home/>}/>     
        <Route path="/About" element={<About/>}/>     
        <Route path="/Skills" element={<Skills/>}/>     
        <Route path="/Project" element={<Projects/>}/>     
        <Route path="/Contact" element={<Contact/>}/>     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
