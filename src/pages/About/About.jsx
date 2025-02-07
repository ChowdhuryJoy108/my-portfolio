import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div className="max-w-4xl mx-auto shadow-lg rounded-lg px-6 bg-slate-50  md:px-12 py-12 text-center mt-[100px] ">
      <Helmet>
        <title>JOY | About Me</title>
      </Helmet>

      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <h1 className="text-4xl font-bold">
          <span className="text-green-400">#</span> About
          <span className="text-gray-800">_</span> Me
        </h1>
        <div className="w-20 h-1 bg-green-400 mx-auto my-4"></div>
      </motion.div>

      <motion.p
        initial="hidden"
        animate="visible"
        variants={slideIn}
        className="text-lg text-gray-700 leading-relaxed font-medium max-w-2xl mx-auto text-justify"
      >
        <span className="text-3xl text-green-400 font-bold">Hello!</span> I'm a passionate web developer with a strong foundation in
        MERN stack technology. I graduated from IIUC and successfully completed
        my full-stack development course on Programming Hero.
        <br />
        <br />
        My journey in programming started with a deep curiosity about how the
        web works, which soon turned into a full-fledged passion for building
        dynamic and interactive web applications. I enjoy creating modern,
        scalable, and efficient web solutions that solve real-world problems.
        <br />
        <br />
        Beyond coding, I have a keen interest in sports, exploring new tech
        trends, and dabbling in creative pursuits like graphic design. I
        believe in continuous learning and pushing my limits to grow as a
        developer and as a person. If you're looking for someone who is
        enthusiastic, dedicated, and always up for a challenge, let's connect! 🚀
      </motion.p>
    </div>
  );
};

export default About;