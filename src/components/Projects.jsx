import React from 'react'
import { projects } from '../data/ProjectData';

const Projects = () => {
  {/* <div className="flex flex-wrap justify-center gap-4"> */}
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {projects.map((project, index) => (
        <div key={index} className="card bg-base-100 shadow-xl">
          <figure>
            <img src={project.image} alt={project.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{project.name}</h2>


            <p>{project.description}</p>
            <div className="card-actions justify-end">
              <div className="flex justify-between w-full">
                  <div className="flex flex-wrap">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="mr-2 mt-6 text-xl">
                      {tech}
                      {techIndex < project.tech.length - 1 && ', '}
                    </span>
                  ))}
                  </div>
                <div className="btn-group flex">

                {/* <button className="btn btn-primary"></button> */}
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-5 mr-5">GitHub</a>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary mt-5">Live Demo</a>
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