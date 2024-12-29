import React from 'react'
import { projects } from '../data/ProjectData';
import { FaGithub } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { SiDevpost } from "react-icons/si";

const Projects = () => {
  {/* <div className="flex flex-wrap justify-center gap-4"> */}
  return (



    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 grid-rows-auto">

      {projects.map((project, index) => (
        <div key={index} className="card card-compact bg-[#334155] m-3 p-0">
          <figure>
            <img src={project.image} alt={project.name} />
          </figure>

          <div className="card-body">
            <h2 className="card-title text-3xl justify-center">{project.name}</h2>

            <p>{project.description}</p>

          <div className="flex mt-3">

          {
              project.tech.map((tech, techIndex) => (
                <div key={techIndex}>
                  <button className="btn bg-emerald mr-2">
                    {tech}
                  </button>
                </div>
              ))
            }
          </div>

            {/* <p className="text-[#4ade80]">
              <b>{project.bold}</b>
            </p> */}
            <div className="card-actions justify-end">
              <div className="flex justify-between w-full">
                  <div className="flex flex-wrap">
                  {/* {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="mr-2 mt-6 text-xl">
                      {tech}
                      {techIndex < project.tech.length - 1 && ', '}
                    </span>
                  ))} */}

                  </div>
                  <div className="icon-group flex mt-5 justify-center mx-auto">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="mr-5">
                      <FaGithub size={45} color="white"/>
                    </a>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="mr-5">
                      <BsGlobe2 size={45} color="white"/>
                    </a>
                    )}

                    {project.devpost && (
                      <a href={project.devpost} target="_blank" rel="noopener noreferrer">
                      <SiDevpost size={45} color="white"/>
                    </a>
                    )}  
                    
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects