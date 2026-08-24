import { portfolioData } from "../data/portfolioData";

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <p className="section-label">MY SKILLS</p>

        <h2 className="section-title">
          Technologies I work with.
        </h2>

        <div className="skills-grid">
          {portfolioData.skills.map((skill) => (
            <div className="skill-card" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;