import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Project from './Components/Project';

function App() {
  return (
    <div>

      <Navbar/>
      <Home/>
      <About/>
      <Skills/>

      <Project/>

      <Contact/>
      
      
    </div>
  )
}

export default App
