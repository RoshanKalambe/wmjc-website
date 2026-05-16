import "./RTI.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function RTIApplication() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="rti-wrapper">
        <div className="rti-container">
          <div className="section-title">RTI — Submit Application</div>

          <div className="rti-card">
            <h3>How to File an RTI Application</h3>
            <p>
              Any citizen of India can file an RTI application to seek information from
              Wamanrao Muranjan Junior College. You can submit your application online
              using the form below or physically at the college office during working hours.
            </p>
            <div className="rti-highlight">
              <strong>Application Fee:</strong> ₹10/- (payable by Cash / DD / Postal Order to WMJC)<br />
              <strong>Response Time:</strong> 30 days from date of receipt of application<br />
              <strong>Office Hours:</strong> Monday to Saturday — 10:00 AM to 5:00 PM<br />
              <strong>Address:</strong> Sharadanilayam Complex, Neelam Nagar Phase-2, Mulund (East) – 400081
            </div>
          </div>

          <div className="rti-card">
            <h3>RTI Application Form</h3>
            <p className="form-note">* Indicates required field. All information provided must be accurate.</p>

            <div className="form-section-title">Applicant's Personal Details</div>

            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" placeholder="Your full name" />
              </div>
              <div className="form-group">
                <label>Father's / Husband's Name *</label>
                <input type="text" placeholder="Father's or Husband's name" />
              </div>
            </div>

            <div className="form-group">
              <label>Residential Address *</label>
              <textarea placeholder="Enter your complete residential address with PIN code..." style={{ height: "90px" }}></textarea>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Mobile Number *</label>
                <input type="tel" placeholder="Your mobile number" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Your email address (optional)" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Nationality *</label>
                <input type="text" placeholder="e.g. Indian" defaultValue="Indian" />
              </div>
              <div className="form-group">
                <label>Are you BPL Card Holder? *</label>
                <select>
                  <option value="">-- Select --</option>
                  <option>No</option>
                  <option>Yes (Attach BPL Card copy)</option>
                </select>
              </div>
            </div>

            <div className="form-section-title">Information Requested</div>

            <div className="form-group">
              <label>Department / Section *</label>
              <select>
                <option value="">-- Select Department --</option>
                <option>Administration / Office</option>
                <option>Admission Department</option>
                <option>Accounts / Finance</option>
                <option>Science Department</option>
                <option>Commerce Department</option>
                <option>Library</option>
                <option>Sports / Gymnasium</option>
                <option>Examination Department</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Details of Information Required *</label>
              <textarea placeholder="Please describe clearly and specifically what information you are seeking. Be as detailed as possible to help us respond accurately..."></textarea>
            </div>

            <div className="form-group">
              <label>Period to Which Information Relates *</label>
              <input type="text" placeholder="e.g. Academic Year 2024-25, or specific date range" />
            </div>

            <div className="form-group">
              <label>Format of Information Required *</label>
              <select>
                <option value="">-- Select Format --</option>
                <option>Printed Copy</option>
                <option>Soft Copy (Email / CD)</option>
                <option>Inspection of Records</option>
                <option>Certified Copy</option>
              </select>
            </div>

            <div className="form-section-title">Fee Payment Details</div>

            <div className="form-row">
              <div className="form-group">
                <label>Mode of Payment *</label>
                <select>
                  <option value="">-- Select --</option>
                  <option>Cash (Pay at office)</option>
                  <option>Demand Draft</option>
                  <option>Postal Order</option>
                  <option>Online Transfer</option>
                </select>
              </div>
              <div className="form-group">
                <label>DD / Postal Order Number (if applicable)</label>
                <input type="text" placeholder="Enter DD or PO number" />
              </div>
            </div>

            <div className="form-group">
              <label>Declaration *</label>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginTop: "6px" }}>
                <input type="checkbox" style={{ width: "auto", marginTop: "3px", flexShrink: 0 }} />
                <span style={{ fontSize: "13.5px", color: "#333", lineHeight: "1.7" }}>
                  I hereby declare that I am a citizen of India and the information sought is not
                  related to any exempted category under Section 8 of the RTI Act 2005. I confirm
                  that all the information provided above is true and correct to the best of my knowledge.
                </span>
              </div>
            </div>

            <button className="submit-btn">Submit RTI Application</button>
          </div>

        </div>
      </div>
      <div className="news-bar">
        <strong>College News:</strong> Demo College Office, New Telephone Number - 52215-69961 - PrJC 😊
      </div>
      <Footer />
    </>
  );
}

export default RTIApplication;