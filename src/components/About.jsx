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
          <h1 className="font-bold">About Emily</h1>
          <p>
            Hi, I'm Emily Kang, a Computer Science student at the Paul G. Allen School 
            of the University of Washington. I did two software engineer internships at Boeing, and 
            I mainly have skills in full-stack web development and backend. I'm passionate about learning new technologies and working with others. On my free time I'm working 
            on a cool project called SmartShare, and continuing development on MediaDash. 

            <br></br>
            <br></br>

            Feel free to reach out or look through my Github! 

            <ContactInfo/>
            
            {/* Currently I'm taking classes on distributed systems
            and networks!  */}

            {/* I'm currently learning about machine learning 
            to prepare for a class, and robotics research with a lab.
            And I'm working on a cool project called SmartShare!  */}
          </p>
          
      </div>
    </div>
  </div>
  )
}

export default About