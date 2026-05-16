import "./Contact.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="contact-wrapper">
        <div className="contact-container">

          {/* LEFT */}
          <div className="contact-left">
            <div className="section-title">Contact Us</div>

            {/* Map — Demo placeholder instead of real location */}
            <div className="map-box">
              <div style={{
                width: "100%",
                height: "280px",
                background: "linear-gradient(135deg, #dbe6f6, #c7d6ec)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                borderRadius: "8px",
                color: "#2c5fa8",
                fontSize: "15px",
                fontWeight: "600",
                border: "2px dashed #b0c8e8",
              }}>
                <span style={{ fontSize: "40px" }}>📍</span>
                <span>Campus Location Map</span>
                <span style={{ fontSize: "13px", color: "#6b8cba", fontWeight: "400" }}>
                  Map will be embedded here with actual college location
                </span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="contact-card">
              <h3>Contact</h3>
              <div className="contact-info-row">
                <span className="label">Country:</span>
                <span className="value">India</span>
              </div>
              <div className="contact-info-row">
                <span className="label">City:</span>
                <span className="value">Demo City, Maharashtra</span>
              </div>
              <div className="contact-info-row">
                <span className="label">Email:</span>
                <span className="value">
                  <a href="mailto:info@democollege.in">info@democollege.in</a><br />
                  <a href="mailto:admin@democollege.in">admin@democollege.in</a>
                </span>
              </div>
              <div className="contact-info-row">
                <span className="label">Call us:</span>
                <span className="value">
                  022 – XXXXXXX<br />
                  022 – XXXXXXX<br />
                  Mobile: 9XXXXXXXXX<br />
                  <em style={{ fontSize: "12px", color: "#666" }}>
                    (On working days Between 10 AM to 5 PM)
                  </em>
                </span>
              </div>
            </div>

            {/* Address */}
            <div className="address-card">
              <h3>Address</h3>
              <p>
                Demo Junior College of Science &amp; Commerce,<br />
                Demo Complex,<br />
                Demo Nagar Phase-2,<br />
                Demo City – XXXXXX
              </p>
              <p>
                <strong>Website of our Senior College:</strong><br />
                <a href="#" target="_blank" rel="noreferrer">
                  www.democollege.in
                </a>
              </p>
            </div>
          </div>

          {/* RIGHT — Inquiry Form */}
          <div className="contact-right">
            <div className="inquiry-card">
              <h3>Do you have any questions?</h3>
              <p className="subtitle">Inquiry regarding Junior College</p>

              <div className="form-group">
                <label>Name *</label>
                <input type="text" placeholder="Your full name" />
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" placeholder="Your email address" />
              </div>

              <div className="form-group">
                <label>Mobile Number *</label>
                <input type="tel" placeholder="Your mobile number" />
              </div>

              <div className="form-group">
                <label>Stream of Interest *</label>
                <select>
                  <option value="">-- Select Stream --</option>
                  <option>Science</option>
                  <option>Commerce</option>
                  <option>Bifocal</option>
                </select>
              </div>

              <div className="form-group">
                <label>Your Question / Message *</label>
                <textarea placeholder="Type your question or message here..."></textarea>
              </div>

              <button className="submit-btn">Submit Inquiry</button>
            </div>
          </div>

        </div>
      </div>

      <div className="news-bar">
        <strong>College News:</strong> Demo College Office — New Telephone Number Coming Soon 😊
      </div>

      <Footer />
    </>
  );
}

export default Contact;