import { ArrowDown } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { DiGithubBadge } from "react-icons/di";
import { IoLogoLinkedin } from "react-icons/io";
import heroImage from "../assets/ChatGPT Image Aug 24, 2026, 01_12_56 PM.png";

function Hero() {
  return (
  <section id="home" className="hero section">
      <div className="hero-wrapper">
        
        <div className="hero-content">
          <p className="hero-small">Hello, I'm</p>

          <h1>{portfolioData.name}</h1>

          <h2>{portfolioData.role}</h2>

          <p className="hero-description">
           I build modern, responsive, and user-friendly websites and web applications with clean interfaces and smooth user experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View My Work
              <ArrowDown size={18} />
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com" target="_blank">
              <DiGithubBadge size={20} />
            </a>

            <a href="https://linkedin.com" target="_blank">
              <IoLogoLinkedin size={20} />
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="image-glow"></div>

          <div className="hero-image-card">
            <img
              src={heroImage}
              alt="Developer workspace"
              className="hero-image"
            />
          </div>

          <div className="floating-card floating-card-one">
            <span>⚛</span>
            <div>
              <strong>React.js</strong>
              <small>Frontend</small>
            </div>
          </div>

          <div className="floating-card floating-card-two">
            <span>JS</span>
            <div>
              <strong>JavaScript</strong>
              <small>Developer</small>
            </div>
          </div>
        </div>

      </div>

      <a href="#about" className="scroll-down">
        <ArrowDown size={22} />
      </a>
    </section>
  );
}

export default Hero;