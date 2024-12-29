import React from 'react'
// import Self from '../assets/Self.jpg'

const About = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex flex-col lg:flex-row">
         
          <div className="w-[30%] rounded ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src='https://pfd-website-bucket.s3.us-west-2.amazonaws.com/assets/Self.jpg' alt="Your Photo" />
          </div>
        <div className="ml-[30px] lg:w-2/3 lg:pl-8">
          <h1 className="font-bold justify-center">About Me</h1>
          <p>
            Hi, I'm Emily Kang, a Computer Science student at the Paul G. Allen School 
            of the University of Washington. I did two software engineer internships at Boeing.
            I mainly have skills in full-stack web development and backend. On my free time I'm working 
            on a cool project called SmartShare, and continuing development on MediaDash. 
            
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