import "./Skills.css";

function Skills() {

  const skillsData = [
    {
      name: "HTML",
      level: 90,
    },

    {
      name: "CSS",
      level: 85,
    },

    {
      name: "JavaScript",
      level: 80,
    },

    {
      name: "React",
      level: 85,
    },

    {
      name: "Java",
      level: 75,
    },

    {
      name: "Spring Boot",
      level: 70,
    },
  ];

  return (
    <section className="skills">

      <h1>My Skills</h1>

      <div className="skills-container">

        {skillsData.map((skill, index) => (

          <div className="skill-card" key={index}>

            <div className="skill-header">

              <h3>{skill.name}</h3>

              <span>{skill.level}%</span>

            </div>

            <div className="progress-bar">

              <div
                className="progress-fill"

                style={{ width: `${skill.level}%` }}
              ></div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;