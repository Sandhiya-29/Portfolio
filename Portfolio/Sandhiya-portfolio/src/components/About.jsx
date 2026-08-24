import { portfolioData } from "../data/portfolioData";

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-label">ABOUT ME</p>

        <h2 className="section-title">
          Turning ideas into modern web experiences.
        </h2>

        <div className="about-grid">
          <div className="about-card">
            <h3>Who I Am</h3>

            <p>{portfolioData.about}</p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <h3>{portfolioData.experience}</h3>
              <p>Experience</p>
            </div>

            <div className="stat-card">
              <h3>10+</h3>
              <p>Projects</p>
            </div>

            <div className="stat-card">
              <h3>10+</h3>
              <p>Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;