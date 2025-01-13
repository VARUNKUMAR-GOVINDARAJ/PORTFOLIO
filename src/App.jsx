import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Project from './Components/Project';
import { Routes, Route } from 'react-router-dom';


import './app.css'

function App() {
  return (
    <div>

      <Navbar/>
      {/* <Home/>
      <About/>
      <Skills/>

      <Project/>

      <Contact/>  */}

      <Routes> 
        <Route path='/' element = {<Home/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/skills' element = {<Skills/>} />
        <Route path='/project' element = {<Project/>} />
        <Route path='/contact' element = {<Contact  />} />
      </Routes>

      
      
      
    </div>
  )
}

export default App
