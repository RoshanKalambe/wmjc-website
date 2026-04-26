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

            {/* Map */}
            <div className="map-box">
              <iframe
                title="WMJC Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.0!2d72.9631!3d19.1693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9e4b3b3b3b3%3A0x3b3b3b3b3b3b3b3b!2sWamanrao+Muranjan+Junior+College!5e0!3m2!1sen!2sin!4v1234567890"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
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
                <span className="value">Mulund East, Mumbai</span>
              </div>
              <div className="contact-info-row">
                <span className="label">Email:</span>
                <span className="value">
                  <a href="mailto:wamanraojc@yahoo.in">wamanraojc@yahoo.in</a><br />
                  <a href="mailto:info@wmjc.in">info@wmjc.in</a>
                </span>
              </div>
              <div className="contact-info-row">
                <span className="label">Call us:</span>
                <span className="value">
                  022 – 21636755<br />
                  022 – 25630347<br />
                  Mobile: 93216 69381<br />
                  <em style={{ fontSize: "12px", color: "#666" }}>(On working days Between 10 AM to 5 PM)</em>
                </span>
              </div>
            </div>

            {/* Address */}
            <div className="address-card">
              <h3>Address</h3>
              <p>
                Wamanrao Muranjan Junior College of Science &amp; Commerce,<br />
                Sharadanilayam Complex,<br />
                Neelam Nagar Phase-2,<br />
                Mulund (East) – 400081
              </p>
              <p>
                <strong>Website of our Senior College:</strong><br />
                <a href="http://drampradhansc.wmjc.in/" target="_blank" rel="noreferrer">
                  www.drampradhansc.wmjc.in
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
        <strong>WMJC News:</strong> WMJC Office, New Telephone Number - 52215-69961 - PrJC 😊
      </div>
      <Footer />
    </>
  );
}

export default Contact;