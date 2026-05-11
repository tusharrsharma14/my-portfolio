import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home/Home'
import Navbar from './Components/Navbar';
import Projects from './pages/Projects/Projects';
import Contacts from './pages/Contacts/Contacts';
import Skills from "./pages/Skills/Skills";
import Resume from "./assets/resume.pdf";



function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    < div className={darkMode ? "dark" : "light"}>
    <Navbar 
  darkMode={darkMode}
  setDarkMode={setDarkMode}
/>
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/projects" element={<Projects></Projects>} />
  <Route path="/Contacts" element={<Contacts/>} />
  <Route path="/skills" element={<Skills />} />
    </Routes>
    </div>
  )
}

export default App;
