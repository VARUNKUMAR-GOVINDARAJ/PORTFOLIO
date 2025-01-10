import React from 'react'
import '../Components/About.css'

function About() {
  return (
    <div className='about'>

      <div className='about-education'>

        <h1 className='about-eduction-heading'> EDUCATION </h1>

        <div className='about-edu-p'>

          <div className='a-e-h'> <b> B.COM. COMPUTER APPLICATIONS </b> ( B.COM.CA ) </div>

          <div className=' a-e-p'>
            Sri Krishna Adithya College of Arts and Science, Coimbatore <br />
            2021 - 2024 <br />
            71% <br />
          </div>

          <div className='a-e-h'> <b> HIGHER SECONDARY SCHOOL CERTIFACTE  </b> ( HSC ) </div>

          <div className=' a-e-p'>
            Vivek Vidayalaya Matriculation Higher Secondary School, Coimbatore <br />
            2019 - 2021 <br />
            89% <br />
          </div>

          <div className='a-e-h'> <b> SECONDARY SCHOOL LEAVING CERTIFACTE  </b> ( SSLC ) </div>

          <div className=' a-e-p'>
            Vivek Vidayalaya Matriculation Higher Secondary School, Coimbatore <br />
            2018 - 2019 <br />
            80% <br />
          </div>

        </div>


        <div className='about-edu-hsc'> </div>
        <div className='about-edu-sslc'> </div>

      </div>
    </div>



  )
}

export default About
