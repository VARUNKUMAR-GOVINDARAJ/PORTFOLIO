

import '../Components/Contact.css'

function Contact() {
  return (
    <div className='contact'>

       <h1 className='contact-heading'> CONTACT ME </h1>
       <div className='contact-comps'> 
        
       <div> <img src='https://cdn.worldvectorlogo.com/logos/linkedin-icon.svg' alt='linkedin' className='c-c-i'/> <a className='c-c-a' href='https://www.linkedin.com/in/varun-kumar-g-18-08-2003-vk/'> Varun Kumar G </a> </div> 
       <div> <img src='https://cdn.worldvectorlogo.com/logos/github-icon-1.svg' alt='github' className='c-c-i'/> <a className='c-c-a' href='https://github.com/VARUNKUMAR-GOVINDARAJ'> VARUNKUMAR-GOVINDARAJ </a> </div>
       <div> <img src='https://cdn.worldvectorlogo.com/logos/official-gmail-icon-2020-.svg' alt='email' className='c-c-i'/> <a className='c-c-a' href='mailto:varunkumar.govindaraj@gmail.com'> varunkumar.govindaraj@gmail.com </a> </div>
       <div> <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/TrueCaller_Icon.png/606px-TrueCaller_Icon.png?20220922190043' alt='phone' className='c-c-i'/> <a className='c-c-a' href='tel:+918667838855'> +91 8667838855 </a> </div>
    


       </div> 
    </div>
  )
}

export default Contact
