import React from 'react'

import '../Components/Skills.css'

import html from '../Images/html.png'
import css from '../Images/css.png'
import js from '../Images/js.png'
import reactbootstrap from '../Images/reactbootstrap.png'
import react from '../Images/react.png'
import redux from '../Images/redux.png'
import node from '../Images/node.png'
import express from '../Images/express.png'
import mongo from '../Images/mongo.png'
import postman from '../Images/postman.png'


function Skills() {
  return (
    <div className='skills'>

        <h1 className='skills-heading'> SKILLS </h1>

        <div className="skill-box">
           <img src={html} alt="Skill 1" />
            <div className="skill-title"> HTML </div>
        </div>

        <div className="skill-box">
           <img src={css} alt="Skill 2" />
            <div className="skill-title"> CSS </div>
        </div>

        <div className="skill-box">
           <img src={js} alt="Skill 3" />
            <div className="skill-title"> JAVASCRIPT </div>
        </div>

        <div className="skill-box">
           <img src={reactbootstrap} alt="Skill 4" />
            <div className="skill-title"> REACT BOOTSTRAP </div>
        </div>

        <div className="skill-box">
           <img src={react} alt="Skill 5" />
            <div className="skill-title"> REACT JS </div>
        </div>

        <div className="skill-box">
           <img src={} alt="Skill 5.1" />
            <div className="skill-title"> REDUX </div>
        </div>

        <div className="skill-box">
           <img src={} alt="Skill 6" />
            <div className="skill-title"> NODE JS </div>
        </div>

        <div className="skill-box">
           <img src={} alt="Skill 7" />
            <div className="skill-title"> EXPRESS JS </div>
        </div>

        <div className="skill-box">
           <img src={} alt="Skill 8" />
            <div className="skill-title"> MONGO DB </div>
        </div>

        <div className="skill-box">
           <img src={} alt="Skill 9" />
            <div className="skill-title"> POSTMAN </div>
        </div>

        <div className="skill-box">
           <img src={} alt="Skill 10" />
            <div className="skill-title"> FIREBASE </div>
        </div>

        <div className="skill-box">
           <img src={} alt="Skill 11" />
            <div className="skill-title"> AWS </div>
        </div>

        <div className="skill-box">
           <img src={} alt="Skill 12" />
            <div className="skill-title"> GITHUB </div>
        </div>

    </div>
  )
}

export default Skills
