import React from 'react'
// import Self from '../assets/Self.jpg'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import ContactInfo from './ContactInfo';

const About = () => {
  return (
    <div className="hero h-screen">
      <div className="hero-content flex flex-col lg:flex-row">
         
          <div className="w-[30%] rounded ring ring-offset-base-100 ring-offset-2">
            <img src='https://pfd-website-bucket.s3.us-west-2.amazonaws.com/assets/Self.jpg' alt="Your Photo" />
          </div>
        <div className="ml-[30px] lg:w-2/3 lg:pl-8">
          <h1 className="font-bold">About Me</h1>
          <p>
            Hi, I'm Emily Kang, a senior in CS at the Paul G. Allen School 
            of the University of Washington. I graduate in December 2025. 

            </p>

            <br></br>
              
            <p>
            
             I mainly have skills in full-stack and AI.
              I love building learning new technologies and solving problems, so I've been exploring MCP and mobile dev recently.
              I've worked in an AI team at a SaaS called UKG, and full-stack/backend roles at Boeing.

              {/* Fun fact: I did autonomous driving research with the Robot Learning Lab for 1 quarter, and helped publish this paper: */}
              
            </p>

            <br></br>

            <p>
              Feel free to reach out or look through my Github! 
            </p>

            <ContactInfo/>
            
            
            {/* Currently I'm taking classes on distributed systems
            and networks!  */}

            {/* I'm currently learning about machine learning 
            to prepare for a class, and robotics research with a lab.
            And I'm working on a cool project called SmartShare!  */}
        
          
      </div>
    </div>
  </div>
  )
}

export default About
