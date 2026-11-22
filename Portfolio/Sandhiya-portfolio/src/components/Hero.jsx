import { ArrowDown } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { DiGithubBadge } from "react-icons/di";
import { IoLogoLinkedin } from "react-icons/io";
import heroImage from "../assets/file_0000000086cc82118206e5d89e9f7d08 (1).png";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

function Hero() {
  return (
  <section id="home" className="hero section">
      <div className="hero-wrapper">
        
        <div className="hero-content">
          <p className="hero-small">Hello, I'm</p>

          <h2>{portfolioData.name}</h2>

          <h2>{portfolioData.role}</h2>

        <p className="hero-description">
  I build scalable, responsive, and high-performance web applications,
  combining intuitive frontend interfaces with robust backend systems,
  secure APIs, and seamless database integration.
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
            <span><FaReact /></span>
            <div>
              <strong>React.js</strong>
              <small>Frontend</small>
            </div>
          </div>

          <div className="floating-card floating-card-two">
            <span><FaNodeJs /></span>
            <div>
              <strong>Node.js</strong>
              <small>Backend</small>
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