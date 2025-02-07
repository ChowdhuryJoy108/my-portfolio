import { motion } from "framer-motion";

const educationData = [
  {
    id: 1,
    university: "International Islamic University Chittagong",
    degree: "Bachelor of Science in Computer Science & Engineering",
    year: "2019 - 2023",
    logo: "https://i.ibb.co.com/pjJZfCnM/iiuc.jpg",
  },
];

const Education = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center gap-4 my-10">
        <div className="w-16 h-1 bg-green-400"></div>
        <h1 className="text-3xl sm:text-2xl font-bold">
          <span className="text-green-400">#</span>My
          <span className="text-green-400">_</span>Background
        </h1>
      </div>

   
      <div className="w-full max-w-none grid sm:grid-cols-2 gap-6">
        {educationData.map((edu) => (
          <motion.div
            key={edu.id}
            className="flex flex-col sm:flex-row items-center gap-4 bg-white shadow-lg rounded-lg p-6 border transition-transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={edu.logo}
              alt="University Logo"
              className="w-16 h-16 object-contain"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold text-gray-800">
                {edu.university}
              </h3>
              <p className="text-gray-600">{edu.degree}</p>
              <p className="text-gray-500 text-sm">{edu.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
