import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label">FEATURED PROJECTS</p>

        <h2 className="section-title">
          Some things I have built.
        </h2>

        <div className="projects-grid">
          {portfolioData.projects.map((project, index) => (
            <div className="project-card" key={project.title}>
              <div className="project-number">
                0{index + 1}
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-list">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;