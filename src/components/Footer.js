import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <a href="#">Privacy Policy</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="footer-copy">
        © 2024 All Rights Reserved. Developed and maintained by —
      </div>
    </footer>
  );
}

export default Footer;