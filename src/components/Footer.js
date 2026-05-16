import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h3>📚 About college</h3>
          <p>
            This college is a premier educational institution dedicated to 
            providing quality education and holistic development of students since beginning of the college.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>🔗 Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/faculty">Faculty</Link></li>
            <li><Link to="/admission">Admission</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Academics */}
        <div className="footer-section">
          <h3>🎓 Academics</h3>
          <ul className="footer-links">
            <li><Link to="/courses">Science Stream</Link></li>
            <li><Link to="/courses">Commerce Stream</Link></li>
            <li><Link to="/facilities/library">Library</Link></li>
            <li><Link to="/facilities/laboratory">Laboratory</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>📞 Contact</h3>
          <p>
            <strong>Location:</strong><br />
            Mulund, Mumbai
          </p>
          <p>
            <strong>Phone:</strong><br />
            +91-XXXX-XXXX-XX
          </p>
          <p>
            <strong>Email:</strong><br />
            info@college.edu.in
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-copy">
          © {currentYear} Demo-College. All rights reserved.
        </div>
        <div className="footer-social">
          <a href="#" className="social-icon" title="Facebook" aria-label="Facebook">
            f
          </a>
          <a href="#" className="social-icon" title="Twitter" aria-label="Twitter">
            𝕏
          </a>
          <a href="#" className="social-icon" title="LinkedIn" aria-label="LinkedIn">
            in
          </a>
          <a href="#" className="social-icon" title="Instagram" aria-label="Instagram">
            📷
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;