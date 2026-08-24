import { portfolioData } from "../data/portfolioData";

function Footer() {
  return (
    <footer>
      <p>
        © 2026 {portfolioData.name}. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;