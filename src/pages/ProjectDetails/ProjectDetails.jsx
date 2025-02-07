import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null); // Initially null to avoid empty object issues
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    setLoading(true);
    fetch(`https://my-portfolio-server-sigma-inky.vercel.app/project/${projectId}`)
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching project:", error);
        setLoading(false);
      });
  }, [projectId]); // ✅ Ensure effect runs when projectId changes

  if (loading) {
    return <p className="text-center text-lg text-gray-600">Loading...</p>;
  }

  if (!project) {
    return (
      <p className="text-center text-lg text-red-500">Project not found.</p>
    );
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="max-w-6xl mx-auto p-6 md:p-10"
    >
    
      <motion.h1
        variants={fadeIn}
        className="text-3xl md:text-4xl font-bold text-green-600 mb-4"
      >
        {project.project_name}
      </motion.h1>


      <motion.img
        src={project.img}
        alt={project.project_name}
        variants={fadeIn}
        className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
      />


      <motion.p
        variants={slideIn}
        className="mt-6 text-lg text-gray-700 leading-relaxed"
      >
        {project.project_overview}
      </motion.p>


      <motion.div variants={fadeIn} className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Technologies Used:</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies?.map(
            (
              tech,
              index 
            ) => (
              <motion.span
                key={index}
                variants={fadeIn}
                className="px-3 py-1 bg-green-200 text-green-800 rounded-lg text-sm"
              >
                {tech}
              </motion.span>
            )
          )}
        </div>
      </motion.div>


      <motion.div variants={fadeIn} className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Key Features:</h2>
        <ul className="list-disc pl-5 space-y-2">
          {project.key_features?.map(
            (
              feature,
              index 
            ) => (
              <motion.li
                key={index}
                variants={slideIn}
                className="text-gray-600"
              >
                {feature}
              </motion.li>
            )
          )}
        </ul>
      </motion.div>

      <motion.div
        variants={fadeIn}
        className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6 flex-wrap"
      >
        {project.live_link && (
          <a
            href={project.live_link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-4 py-2 bg-green-500 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 transition duration-300"
          >
            Live Site <FaExternalLinkAlt />
          </a>
        )}

        {project.github_link && (
          <a
            href={project.github_link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-4 py-2 bg-gray-800 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-gray-900 transition duration-300"
          >
            GitHub Repo <FaGithub />
          </a>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;
