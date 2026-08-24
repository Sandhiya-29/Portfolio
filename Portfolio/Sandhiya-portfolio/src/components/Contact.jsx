import { Mail } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-container">
        <p className="section-label">GET IN TOUCH</p>

        <h2 className="section-title">
          Let's work together.
        </h2>

        <p className="contact-description">
          Have a project or opportunity in mind? Feel free to contact me.
        </p>

        <a
          href={`mailto:${portfolioData.email}`}
          className="btn primary-btn"
        >
          <Mail size={18} />
          {portfolioData.email}
        </a>
      </div>
    </section>
  );
}

export default Contact;