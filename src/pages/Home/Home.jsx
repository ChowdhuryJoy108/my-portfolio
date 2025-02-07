import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import Profile from "../../assets/profile.png";
import Skills from "../../components/Skills/Skills";
import Projects from "../Projects/Projects";
import About from '../About/About'
import { Helmet } from 'react-helmet-async';
import Contact from "../Contact/Contact";
import Education from "../../components/Education/Education";

const Home = () => {

  const largeScreenAnimation = { x: 100, y: 100 };
  const smallScreenAnimation = { opacity: [0, 1], y: [50, 0] };

  const transition = {
    duration: 2,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  };

  return (
    <div className="w-full px-2 lg:max-w-6xl mx-auto mt-8 lg:px-6">
      <Helmet>
        <title>JOY | Portfolio</title>
   
      </Helmet>
      <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-10 ">

        <motion.div
          animate={window.innerWidth >= 1024 ? largeScreenAnimation : smallScreenAnimation}
          transition={transition}
          className="text-center md:text-left"
        >
          <h4 className="text-lg md:text-xl">Hi there👋, I'm</h4>
          <h1 className="text-4xl md:text-5xl font-bold text-green-600 leading-tight">
            Joy Chowdhury
          </h1>
          <p className="max-w-md md:max-w-lg text-gray-700 mt-4">
            <b>Junior Web Developer</b> | Passionate about crafting responsive,
            user-friendly websites with <b>MERN</b> Tech. Excited to build and
            innovate in a dynamic team! 🚀
          </p>


          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <Link to="https://github.com/ChowdhuryJoy108">
              <FaGithub className="text-3xl hover:text-green-500 transition" />
            </Link>
            <Link  to="https://www.linkedin.com/in/%20joy-chowdhury-5072661b0">
            <FaLinkedin className="text-3xl hover:text-green-500 transition" />
            </Link>
            <Link to="https://www.facebook.com/share/1BkA741HaF/">
            <FaFacebook className="text-3xl hover:text-green-500 transition" />
            </Link>
          </div>


          <div className="flex flex-col items-center lg:items-start">
          <button className="btn bg-green-400 border-none mt-8 text-white flex font-bold text-md rounded-lg px-4 py-2">
            Download Resume <IoDownloadOutline className="text-xl ml-2" />
          </button>
          </div>
        </motion.div>


        <motion.div
          animate={window.innerWidth >= 1024 ? { y: 70 } : { opacity: [0, 1], scale: [0.8, 1] }}
          transition={transition}
          className="flex justify-center md:justify-end"
        >
          <img
            src={Profile}
            alt="Profile"
            className="w-60 md:w-96 rounded-t-full rounded-br-full shadow-xl"
          />
        </motion.div>
      </div>
      <div className="my-16">
        <Skills />
      </div>
      <div className="my-16">
        <Projects />
      </div>
      <div className="my-16">
        <Projects />
      </div>
      <div className="my-16">
        <Education />
      </div>


      <div className="my-16">
        <Contact />
      </div>

    </div>
  );
};

export default Home;
