import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { IoIosGitBranch } from "react-icons/io";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)" },
};

const ProjectsCard = ({ project }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      className="p-4"
    >
      <div className="p-6 shadow-lg rounded-xl bg-white flex flex-col h-full">
    
        <motion.img
          src={project.img}
          alt={project.project_name}
          className="w-full h-48 md:h-52 lg:h-56 xl:h-64 rounded-xl object-cover"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

       
        <div className="flex flex-col flex-grow mt-4">
          <motion.h1
            className="text-xl lg:text-2xl font-semibold text-neutral-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {project.project_name}
          </motion.h1>
          <motion.p
            className="mt-3 text-sm md:text-base text-gray-500 leading-relaxed flex-grow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {project.project_overview}
          </motion.p>


          <motion.div className="mt-10 flex flex-wrap gap-8">
            <Link
              to={`${project.live_link}`}
              className="inline-flex items-center text-green-600 font-semibold hover:text-neutral-600 transition duration-300"
              title="Live Demo"
            >
              Live Demo <MdArrowOutward />
            </Link>
            <Link
              to={`${project.github_link}`}
              className="inline-flex items-center text-green-600 font-semibold hover:text-neutral-600 transition duration-300"
              title="Repository"
            >
              Repos <IoIosGitBranch />
            </Link>
            <Link
              to={`/project/${project._id}`}
              className="inline-block text-green-600 font-semibold hover:text-neutral-600 transition duration-300"
              title="See Details"
            >
              See Details »
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;
