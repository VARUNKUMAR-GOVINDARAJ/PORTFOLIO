import React from 'react';
import '../Components/Navbar.css'

function Navbar() {
  return (

    <div className='navbar'>

        <div className='nav-name'> PORTFOLIO </div>

        <div className='nav-comps'>

            <div className='nav-aboutme'> ABOUT ME </div>
            <div className='nav-skills'> SKILLS </div>
            <div className='nav-projects'> PROJECTS </div>
            <div className='nav-contact'> CONTACT </div>
            
        </div>
      
    </div>

  )
}

export default Navbar
