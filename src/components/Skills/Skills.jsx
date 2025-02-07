import { motion } from "framer-motion";
import { FaReact, FaJs, FaNode, FaGithub, FaFigma } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { Helmet } from 'react-helmet-async';

const skills = [
  {
    category: "Frontend",
    skills: [
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Firebase", icon: <IoLogoFirebase /> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNode /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: <VscVscodeInsiders /> },
      { name: "Figma", icon: <FaFigma /> },
    ],
  },
];

export default function Skills() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Helmet>
        <title>JOY | Portfolio</title>
      </Helmet>
      <div className="flex items-center gap-4 my-10">
        <div className="w-16 h-1 bg-green-400"></div>
        <h1 className="text-3xl sm:text-4xl font-bold">
          <span className="text-green-400">#</span>My
          <span className="text-green-400">_</span>Skills
        </h1>
      </div>

      {/* Skills Section */}
      <motion.div
        className="w-full lg:max-w-4xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {skills.map((category, index) => (
          <div
            key={index}
            className="p-6 bg-white border-b-4 border-green-600 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-green-400">#</span>
              {category.category}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {category.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center p-4 rounded-lg shadow-md bg-gray-50 hover:bg-green-100 transition-all duration-300"
                >
                  <span className="text-4xl sm:text-5xl text-green-600">
                    {skill.icon}
                  </span>
                  <span className="text-lg sm:text-sm font-semibold mt-2">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
