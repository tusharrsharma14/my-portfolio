import { motion } from "framer-motion";
function ProjectCard({
  title,
  description,
  image,
  github,
  live,
}) {
  return (
    <motion.div
  className="project-card"

  whileHover={{ scale: 1.05 }}

  transition={{ duration: 0.3 }}
>

      <img src={image} alt={title} />

      <h2>{title}</h2>

      <p>{description}</p>

      <div className="project-buttons">

        <a href={github} target="_blank">
          <button>GitHub</button>
        </a>

        <a href={live} target="_blank">
          <button>Live Demo</button>
        </a>

      </div>

    </motion.div>
  );
}

export default ProjectCard;