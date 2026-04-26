import "./Recruitment.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function ApplicationForm() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="recruitment-wrapper">
        <div className="recruitment-container">
          <div className="section-title">Recruitment — Application Form</div>

          <div className="recruitment-card">
            <h3>Job Application</h3>
            <p>
              Instructions: Please enter your correct information. All fields marked with *
              are mandatory. Your information shall be stored in our data bank and you will
              be called for an interview when a vacancy arises for your concerned post.
            </p>
            <p className="form-note">* Indicates required field</p>

            {/* Personal Information */}
            <div className="form-section-title">Personal Information</div>

            <div className="form-row">
              <div className="form-group">
                <label>Surname *</label>
                <input type="text" placeholder="Surname" />
              </div>
              <div className="form-group">
                <label>Name *</label>
                <input type="text" placeholder="First Name" />
              </div>
              <div className="form-group">
                <label>Middle Name</label>
                <input type="text" placeholder="Middle Name" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Date of Birth *</label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>Gender *</label>
                <select>
                  <option value="">-- Select --</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Nationality *</label>
                <input type="text" placeholder="e.g. Indian" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" placeholder="Your email address" />
              </div>
              <div className="form-group">
                <label>Mobile Number *</label>
                <input type="tel" placeholder="Your mobile number" />
              </div>
            </div>

            <div className="form-group">
              <label>Residential Address *</label>
              <textarea placeholder="Enter your full residential address..."></textarea>
            </div>

            {/* Educational Qualification */}
            <div className="form-section-title">Educational Qualification</div>

            <div className="form-row">
              <div className="form-group">
                <label>Highest Qualification *</label>
                <input type="text" placeholder="e.g. M.Sc, M.Com, MCA" />
              </div>
              <div className="form-group">
                <label>Subject / Specialization *</label>
                <input type="text" placeholder="e.g. Physics, Commerce" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>University / Institution *</label>
                <input type="text" placeholder="Name of University" />
              </div>
              <div className="form-group">
                <label>Year of Passing *</label>
                <input type="number" placeholder="e.g. 2020" />
              </div>
              <div className="form-group">
                <label>Percentage / CGPA *</label>
                <input type="text" placeholder="e.g. 72% or 8.5 CGPA" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>B.Ed / D.Ed Qualification</label>
                <select>
                  <option value="">-- Select --</option>
                  <option>B.Ed</option>
                  <option>D.Ed</option>
                  <option>M.Ed</option>
                  <option>Not Applicable</option>
                </select>
              </div>
              <div className="form-group">
                <label>B.Ed Year of Passing</label>
                <input type="number" placeholder="e.g. 2021" />
              </div>
            </div>

            {/* Post Applied For */}
            <div className="form-section-title">Post Applied For</div>

            <div className="form-row">
              <div className="form-group">
                <label>Type of Post *</label>
                <select>
                  <option value="">-- Select Type --</option>
                  <option>Teaching Post</option>
                  <option>Non-Teaching Post</option>
                </select>
              </div>
              <div className="form-group">
                <label>Post Applied For *</label>
                <select>
                  <option value="">-- Select Post --</option>
                  <optgroup label="Teaching Posts">
                    <option>Lecturer in Physics</option>
                    <option>Lecturer in Chemistry</option>
                    <option>Lecturer in Mathematics</option>
                    <option>Lecturer in Biology</option>
                    <option>Lecturer in Commerce</option>
                    <option>Lecturer in Computer Science</option>
                    <option>Lecturer in English</option>
                    <option>Lecturer in Hindi</option>
                  </optgroup>
                  <optgroup label="Non-Teaching Posts">
                    <option>Lab Assistant — Science</option>
                    <option>Lab Assistant — Computer</option>
                    <option>Library Assistant</option>
                    <option>Clerk / Office Assistant</option>
                    <option>Accountant</option>
                    <option>Peon / Support Staff</option>
                    <option>Security Guard</option>
                  </optgroup>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Years of Experience</label>
                <input type="number" placeholder="e.g. 3" />
              </div>
              <div className="form-group">
                <label>Current / Last Employer</label>
                <input type="text" placeholder="Name of school or college" />
              </div>
            </div>

            {/* Additional Info */}
            <div className="form-section-title">Additional Information</div>

            <div className="form-group">
              <label>Cover Letter / About Yourself *</label>
              <textarea placeholder="Tell us about yourself, your teaching philosophy, experience and why you want to join WMJC..."></textarea>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Expected Salary (per month)</label>
                <input type="text" placeholder="e.g. ₹25,000" />
              </div>
              <div className="form-group">
                <label>Available to Join From</label>
                <input type="date" />
              </div>
            </div>

            <button className="submit-btn">Submit Application</button>
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

export default ApplicationForm;