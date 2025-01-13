import '../Components/Navbar.css'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function Navbar() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



 // Function to close the Offcanvas when a link is clicked
  const handleOffClick = () => {
    handleClose()
  }


  return (

    <div className='navbar'>

      <Link to='/' style={{ textDecoration:'none'}} onClick={handleOffClick} > <div className='nav-name'> PORTFOLIO </div> </Link>

      <div className='nav-comps'>

       <Link to='/about' style={{ textDecoration:'none'}} onClick={handleOffClick}> <div className='nav-aboutme'> ABOUT ME </div> </Link>
       <Link to='/skills' style={{ textDecoration:'none'}} onClick={handleOffClick}>  <div className='nav-skills'> SKILLS </div> </Link>
       <Link to='/project' style={{ textDecoration:'none'}} onClick={handleOffClick}> <div className='nav-projects'> PROJECTS </div> </Link>
       <Link to='/contact' style={{ textDecoration:'none'}} onClick={handleOffClick} > <div className='nav-contact'> CONTACT </div> </Link>

      </div>

      <div className='nav-offcanvas'>

        <Button style={{ backgroundColor:"black", borderColor:'aqua', marginRight:'20px'}} onClick={handleShow}>
          <i className="bi bi-list nav-off-btn"></i>
        </Button>

        <Offcanvas show={show} onHide={handleClose} placement="end" backdrop="static" >
          <Offcanvas.Header closeButton style={{ backgroundColor: 'aqua',color:'black' }}>

          <Link to='/about' style={{ textDecoration:'none'}} onClick={handleOffClick}> 
          <Offcanvas.Title className='nav-name-off' > PORTFOLIO </Offcanvas.Title> </Link>
          
          </Offcanvas.Header>
          <Offcanvas.Body style={{ backgroundColor: 'black', fontWeight:'bolder' }}>

            <div style={{ marginLeft:'20px'}}>

             <Link to='/about' style={{ textDecoration:'none'}} onClick={handleOffClick}> <p style={{ color:"white"}} className='home-off-p' >ABOUT ME</p> </Link>
             <Link to='/skills' style={{ textDecoration:'none'}} onClick={handleOffClick}> <p style={{ color:"white"}} className='home-off-p'>SKILLS</p> </Link>
             <Link to='/project' style={{ textDecoration:'none'}} onClick={handleOffClick}> <p style={{ color:"white"}} className='home-off-p'>PROJECTS</p> </Link>
             <Link to='/contact' style={{ textDecoration:'none'}} onClick={handleOffClick}> <p style={{ color:"white"}} className='home-off-p'>CONTACT</p> </Link>

            </div>

          </Offcanvas.Body>
        </Offcanvas>

      </div>

    </div>

  )
}

export default Navbar
