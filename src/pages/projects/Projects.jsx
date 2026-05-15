import "./Projects.css";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import { motion } from "framer-motion";

function Projects() {

  const projectData = [
    {
      title: "Travelease",
      description:
        "Travel booking and management platform built using React.",
         image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4",

      github: "...",
      live: "...",

    },

   {
      title: "E-Commerce App",
      description: "Online shopping application using React.",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4",

      github: "https://github.com/",
      live: "https://vercel.com/",
    },

    {
      title: "Weather App",
      description: "Weather forecast app using API.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",

      github: "https://github.com/",
      live: "https://vercel.com/",
    },
  ];
  return (
    <motion.section
  className="projects"
  initial={{ opacity: 0, y:30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5}}
  viewport={{ once: true }}
>

      <h1>My Projects</h1>

      <div className="project-container">

        {projectData.map((project, index) => (

          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            github={project.github}
            live={project.live}
          />

        ))}

      </div>

    </motion.section>
  );
}

export default Projects;