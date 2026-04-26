import "./Courses.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import collegeImg from "../assets/Tropical construction with a green facade.png";

function Courses() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* ── MAIN CONTENT ─────────────────────────────────── */}
      <div className="courses-wrapper">
        <div className="courses-container">

          {/* ── LEFT COLUMN ──────────────────────────────── */}
          <div className="courses-left">
            <div className="section-title">Basic Courses</div>

            {/* Science / Arts / Commerce descriptions */}
            <div className="course-group">
              <h3>Subjects</h3>

              <h4>Science</h4>
              <p>
                <strong>Gen. Science</strong>Along with the basic subjects of Physics, Chemistry, Mathematics and English of 100 marks each, students have to take biology and any one of the second language i.e. Marathi or Hindi.
                Science with I.T.Student even can take Information Technology as optional subject instead of Marathi or Hindi with all compulsory Subjects
              </p>
              <p>
                <strong>Bi-focal Science</strong>Along with the basic subjects (Compulsory subjects) of Physics, Chemistry, Mathematics and English of 100 marks each, students can select any one of the following three subjects as Bi-focal subject 
                1.Computer Science
                2.Electrical Maintenance
                Each of these bifocal subjects consist two papers of 100 marks each. In this case student will not be allowed to select Biology and second language. In addition to these five subjects, Environmental studies and Physical education are the two additional subjects which have grading.
              </p>

              <h4>Commerce</h4>
              <p>
                It consists
                1.Book Keeping and Accountancy
                2.Organization of Commerce and Management
                3.Economics
                4.English (Compulsory subjects)
                5.Marathi or Hindi
                6.Secretarial Practice or Mathematics
                7.Environmental studies and Physical education are the two additional subjects which have grading system.
                Commerce with I.T.
                Apart from all above subjects student can select Information Technology as optional subject instead of Marathi or Hindi.
              </p>
            </div>

            {/* Passing Norms Table */}
            <div className="course-group">
              <h3>Norms and Standard of Passing the Examination</h3>
              <table className="norm-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Standard</th>
                    <th>Grade</th>
                    <th>Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Standard of Passing of Examination</td>
                    <td>A++</td>
                    <td>70.00% and above</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Norms for Science HSC Electronics (Comp. SC)</td>
                    <td>A</td>
                    <td>60.00% to 60.99%</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Norms for Commerce &amp; Arts HSC</td>
                    <td>B</td>
                    <td>45.00% to 35.99%</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Norms for Science HSC</td>
                    <td>F</td>
                    <td>35.00% to 40.99%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ── RIGHT COLUMN ─────────────────────────────── */}
          <div className="courses-right">

            {/* New Courses Card */}
            <div className="new-courses-card">
              <h4>NEW COURSES</h4>
              <div className="course-item">
                <div className="course-name">⚡ Electrical Maintenance</div>
                <div className="course-desc">
                  Courses knowledge about residential, commercial, and industrial electrical circuits.
                  Prema hands-on training, conducted in a well-equipped classroom technical
                  Machines-operational continued by par ment, tant Communes Encompasiated payments
                  harmonic-style. Seeks motivated students can meecos on used tie professing prestas
                  careeress, isturmine knowledge frode the basances to Strictly got extractions used
                  shuda. In-facticial examination of forests, said nearnimidaries select knowledge
                  in stetions.
                </div>
              </div>
            </div>

            {/* Career Guidance Card */}
            <div className="career-card">
              <h4>CAREER GUIDANCE</h4>
              <button className="career-btn">➡ Career Path Finder</button>
            </div>

            {/* College Building Image */}
            <div className="college-img-box">
              <img src={collegeImg} alt="WMJC College Building" />
            </div>

            {/* Exam Scores Card */}
            <div className="exam-scores-card">
              <h4>NEW COURSES</h4>
              <div className="score-item">
                <span className="score-label">☐ Unit Test · Jun</span>
                <span className="score-value">60.00</span>
              </div>
              <div className="score-item">
                <span className="score-label">☐ Terminal Examination:</span>
                <span className="score-value">60.00</span>
              </div>
              <div className="score-item">
                <span className="score-label">☐ Preliminary Exams ·</span>
                <span className="score-value">69.00</span>
              </div>
              <div className="score-item">
                <span className="score-label">☐ Preliminary Exams ·</span>
                <span className="score-value">40.00</span>
              </div>
              <div className="score-item">
                <span className="score-label">☐ Others P ·</span>
                <span className="score-value">33.90% to 40.90%</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* News bar */}
      <div className="news-bar">
        <strong>WMJC News:</strong> WMJC Office, New Telephone Number - 52215-69961 - PrJC 😊
      </div>

      <Footer />
    </>
  );
}

export default Courses;