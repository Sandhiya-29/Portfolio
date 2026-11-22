import { Menu } from "lucide-react";
import { useState } from "react";
import { portfolioData } from "../data/portfolioData";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">{portfolioData.name}.</h2>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
        >
          <Menu size={24} />
        </button>

        <div className={`nav-links ${open ? "active" : ""}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;