
import '../Components/Home.css'
import About from './About';
import Contact from './Contact';
import Project from './Project';
import Skills from './Skills';
import Resume from '../assets/resume/VarunKumarResume.pdf'

function Home() {


  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'VarunKumarResume.pdf'; 
    link.click();
  }

  return (
 <>
 
   <div className='home' id='homeScroll'>
      <h1 className='home-name'> VARUN KUMAR G </h1>
      <h4 className='home-bio'> MERN STACK DEVELOPER! </h4>
      <button className='home-button' onClick={handleDownload}> Download CV &nbsp; <i className="bi bi-download"></i> </button>
    </div>
 <About/>
 <Skills/>
 <Project/>
 <Contact/>
 </>
  )
}

export default Home
