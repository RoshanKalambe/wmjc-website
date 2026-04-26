import "./Hero.css";
import logo from "../assets/logo.jpeg";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="logo-title">
          <img src={logo} alt="WMJC Logo" />
          <div>
            <h4>Raosaheb Balaram Dnyandeo Thakur Vidyamandir's</h4>
            <h1>Wamanrao Muranjan Junior College</h1>
            <h2>of Science and Commerce</h2>
          </div>
        </div>
        <div className="tagline">Learning For Life</div>
      </div>
    </div>
  );
}

export default Hero;