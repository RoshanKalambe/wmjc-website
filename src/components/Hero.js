import "./Hero.css";
import logo from "../assets/logo.jpeg";

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="hero-left">
        <div className="logo-title">
          <img src={logo} alt="college Logo" />
          <div className="logo-title-text">
            <h4>College Trust's name</h4>
            <h1>Demo-College's name</h1>
            <h2>of Science and Commerce</h2>
          </div>
        </div>

        <div className="tagline">Knowledge is power</div>

        <div className="hero-cta">
          <button className="cta-button cta-primary" onClick={() => scrollToSection("welcome")}>
            <span>📚</span> Explore
          </button>
          <button className="cta-button cta-secondary" onClick={() => window.location.href = "/contact"}>
            <span>✉️</span> Contact Us
          </button>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-icon"></div>
      </div>
    </div>
  );
}

export default Hero;