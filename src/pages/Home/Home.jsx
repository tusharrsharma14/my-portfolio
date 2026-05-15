import "./Home.css";
import { Link } from "react-router-dom";
import resume from "../../assets/resume.pdf";
import { motion } from "framer-motion";
import Myphoto from "../../assets/Myphoto.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

function Home() {
  return (
    <motion.section
      className="hero"

      // initial={{
      //   opacity: 0,
      //   scale: 0
      // }}

      // animate={{
      //   opacity: 1,
      //   scale: 1
      // }}

      // transition={{
      //   duration: 2
      // }}
      initial={{ opacity: 0, y: 100 }}

      animate={{ opacity: 1, y: 0 }}

      transition={{ duration: 1 }}
    >

      <div className="hero-left">

        <h1>
          Hi, I'm <span>Tushar Sharma</span>
        </h1>

        <h2>Full Stack Developer | React | Java | Spring Boot</h2>

        <p>
          I build modern and responsive web applications
          using MERN
        </p>
        <div className="hero-buttons">

          <Link to="/projects" >
            <button> View Projects</button>
          </Link>

          <a href={resume} download>
            <button> Download Resume </button>
          </a>
        </div>
        <div className="social-icons">
          <a
            href="https://github.com/"
            target="_blank"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:tushar@example.com"
          >
            <FaEnvelope />
          </a>

        </div>
      </div>

      <motion.div
  className="hero-right"
  animate={{ y: [0, -15, 0],
    // rotate: [0, 1, 0, -1, 0],
   }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>

        <img
          src={Myphoto}
          alt="Tushar Sharma"
        />

      </motion.div>

    </motion.section>
  );
}

export default Home;