import React, { useEffect, useState } from "react";
import ProjectsCard from "../../components/ProjectsCard/ProjectsCard";
import { Helmet } from 'react-helmet-async';

const Projects = () => {
    const [ projects, setProjects] = useState([]);

  useEffect(()=>{
     fetch('https://my-portfolio-server-sigma-inky.vercel.app/projects')
     .then(res => res.json())
     .then(data => setProjects(data))
  },[])

  return (
    <div className="w-full p-2 lg:max-w-6xl mx-auto lg:p-6">
        <Helmet>
        <title>JOY | Portfolio</title>
      </Helmet>
      <div className="flex items-center gap-4 my-10">
        <div className="w-16 h-1 bg-green-400"></div>
        <h1 className="text-3xl sm:text-4xl font-bold">
          <span className="text-green-400">#</span>My
          <span className="text-green-400">_</span>Projects
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {
            projects.map(project => <ProjectsCard key={project._id} project={project} />)
        }
      </div>
    </div>
  );
};

export default Projects;
