import '../Components/Navbar.css'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navbar() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (

    <div className='navbar'>

      <div className='nav-name'> PORTFOLIO </div>

      <div className='nav-comps'>

        <div className='nav-aboutme'> ABOUT ME </div>
        <div className='nav-skills'> SKILLS </div>
        <div className='nav-projects'> PROJECTS </div>
        <div className='nav-contact'> CONTACT </div>

      </div>

      <div className='nav-offcanvas'>

        <Button style={{ backgroundColor:"black", borderColor:'aqua', marginRight:'20px'}} onClick={handleShow}>
          <i className="bi bi-list nav-off-btn"></i>
        </Button>

        <Offcanvas show={show} onHide={handleClose} backdrop="static" >
          <Offcanvas.Header closeButton style={{ backgroundColor: 'white',color:'black' }}>
            <Offcanvas.Title className='nav-name-off' > PORTFOLIO </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body style={{ backgroundColor: 'black', color: 'white', fontWeight:'bolder' }}>

            <div style={{ marginLeft:'20px'}}>
              <p>ABOUT ME</p>
              <p>SKILLS</p>
              <p>PROJECT</p>
              <p>CONTACT</p>
            </div>

          </Offcanvas.Body>
        </Offcanvas>

      </div>

    </div>

  )
}

export default Navbar
