import React from 'react'
// import Self from '../assets/Self.jpg'
// import LongerSelf from '../assets/LongerSelf.jpg'

const About = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex flex-col lg:flex-row">
        {/* <img src={Self} alt="My photo" className="max-w-sm rounded-lg shadow-2xl shadow-gray-500"/> */}
        {/* <div className="lg:w-2/3 flex justify-center h-full">
          <div className="avatar justify-center">
            * <div className="w-[50%] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={Self} alt="Your Photo" />
            </div> 
            <div className="w-[50%] ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={LongerSelf} alt="Your Photo" />
            </div>
          </div>
        </div> */}
        <div className="lg:w-2/3 lg:pl-8">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p>
            Hi, I'm Emily Kang, a Computer Science student at the Paul G. Allen School 
            of the University of Washington. I did two software engineer internships at Boeing.
            I mainly have skills in full-stack web development. 
            I'm currently learning about machine learning 
            to prepare for a class, and robotics research with a lab.
            And I'm working on a cool project called SmartShare! 
          </p>
      </div>
    </div>
    </div>
  )
}

export default About