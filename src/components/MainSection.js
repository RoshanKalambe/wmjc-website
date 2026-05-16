import "./MainSection.css";

function MainSection() {
  return (
    <>
      <div className="main-wrapper">
        <div className="main-container">
          {/* LEFT - WELCOME SECTION */}
          <div className="left-section" id="welcome">
            <h3>Welcome to college</h3>

            <p>
              This junior college was founded in long time ago with the vision of providing quality education to students.
              It is one of the premiere junior colleges of science, Commerce and Bifocal streams
              providing quality education with modern facilities. The college is committed to the
              all-round development of students and is recognized by MSSTE.
            </p>

            <p className="blue-title">Syllabus &amp; Marks Distribution</p>

            <table className="syllabus-table">
              <thead>
                <tr>
                  <th>Stream</th>
                  <th>Description</th>
                  <th>Focus Area</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Science (General)</td>
                  <td>Physics, Chemistry, Mathematics, Biology</td>
                  <td>Medical/Engineering</td>
                </tr>
                <tr>
                  <td>Science (Bifocal)</td>
                  <td>Includes specialization: Computer Science / Electronics</td>
                  <td>Tech-focused</td>
                </tr>
                <tr>
                  <td>Commerce</td>
                  <td>Accounting, Economics, Business Management</td>
                  <td>Business/Finance</td>
                </tr>
                <tr>
                  <td>Commerce (IT)</td>
                  <td>Commerce + Information Technology</td>
                  <td>IT + Business</td>
                </tr>
              </tbody>
            </table>

            <div className="result-box">
              <ul>
                <li>FYJC &amp; SYJC Admission Open</li>
                <li>Online admission available - Apply Now</li>
                <li>Excellence in Academic &amp; Extra-Curricular Activities</li>
                <li>State-of-the-art facilities &amp; experienced faculty</li>
              </ul>
            </div>
          </div>

          {/* RIGHT - CARDS SECTION */}
          <div className="right-section">
            {/* CALENDAR CARD */}
            <div className="calendar-card">
              <h4>Academic Calendar 2025–2026</h4>
              <ul>
                <li>
                  <strong>June 10, 2025</strong>
                  <em>College Reopens</em>
                </li>
                <li>
                  <strong>July 14, 2025</strong>
                  <em>FYJC Distribution &amp; Science Syllabus</em>
                </li>
                <li>
                  <strong>July 16, 2025</strong>
                  <em>Sports &amp; Athletic Events</em>
                </li>
                <li>
                  <strong>July 26, 2025</strong>
                  <em>First Unit Test</em>
                </li>
                <li>
                  <strong>September 28, 2025</strong>
                  <em>Environment Week &amp; Tree Plantation Drive</em>
                </li>
                <li>
                  <strong>October 2025</strong>
                  <em>Mid-term Exams</em>
                </li>
                <li>
                  <strong>December 2025</strong>
                  <em>Annual Fest &amp; Exhibitions</em>
                </li>
              </ul>
            </div>

            {/* NOTICE BOARD CARD */}
            <div className="notice-card">
              <h4>Notice Board</h4>
              <ul>
                <li>FY. J.C. Science Syllabus 2025</li>
                <li>SY. J.C. Science &amp; Commerce Syllabus</li>
                <li>Admission Requirements &amp; Documents</li>
                <li>Scholarship Programs Available</li>
                <li>Fee Structure &amp; Payment Options</li>
                <li>Important Announcements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* NEWS BAR */}
      <div className="news-bar">
        <strong>📢 college News:</strong> Online Admission Portal is now live! Register today for FYJC and SYJC streams.
      </div>
    </>
  );
}

export default MainSection;