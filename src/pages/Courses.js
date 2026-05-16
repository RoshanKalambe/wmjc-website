import "./Courses.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";


function Courses() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* MAIN CONTENT */}
      <div className="courses-wrapper">
        <div className="courses-container">

          {/* LEFT COLUMN - COURSES CONTENT */}
          <div className="courses-left">
            <div className="section-title">Academic Streams</div>

            {/* Science Stream */}
            <div className="course-group">
              <h3>Science Stream</h3>

              <h4>General Science (STEM)</h4>
              <p>
                Comprehensive science education with core subjects: Physics, Chemistry, Mathematics, and Biology.
                All subjects are 100 marks each. Students can choose between Marathi or Hindi as a second language.
                This stream prepares students for medical, engineering, and research careers.
              </p>
              <ul>
                <li>Physics - Classical & Modern Mechanics</li>
                <li>Chemistry - Organic & Inorganic Chemistry</li>
                <li>Mathematics - Advanced Calculus & Algebra</li>
                <li>Biology - Botany & Zoology</li>
              </ul>

              <h4>Bifocal Science (Tech-focused)</h4>
              <p>
                Advanced science stream with specialization options. Choose between:
              </p>
              <ul>
                <li>Computer Science - Programming, Data Structures, Web Development</li>
                <li>Electronics - Circuit Design, Microcontrollers, Digital Systems</li>
              </ul>
              <p>
                Each specialization consists of two 100-mark papers. Students don't take Biology or second language in this stream.
              </p>
            </div>

            {/* Commerce Stream */}
            <div className="course-group">
              <h3>Commerce Stream</h3>

              <h4>Core Commerce</h4>
              <p>
                Ideal for students interested in business, finance, and management. Core subjects include:
              </p>
              <ul>
                <li>Book Keeping & Accountancy - Financial Management</li>
                <li>Organization of Commerce & Management - Business Principles</li>
                <li>Economics - Microeconomics & Macroeconomics</li>
                <li>English (Compulsory)</li>
                <li>Marathi or Hindi (Second Language)</li>
                <li>Secretarial Practice or Mathematics (Elective)</li>
              </ul>

              <h4>Commerce with IT</h4>
              <p>
                Commerce stream enhanced with Information Technology skills for careers in fintech, e-commerce, and digital business.
              </p>
            </div>

            {/* Grading System */}
            <div className="course-group">
              <h3>Grading & Passing Standards</h3>
              <table className="norm-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Grade</th>
                    <th>Percentage Range</th>
                    <th>Academic Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>A++</td>
                    <td>70% and above</td>
                    <td>Outstanding</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>A</td>
                    <td>60% to 69.99%</td>
                    <td>Excellent</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>B</td>
                    <td>50% to 59.99%</td>
                    <td>Good</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>C</td>
                    <td>40% to 49.99%</td>
                    <td>Average</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>D</td>
                    <td>Pass (Below 40%)</td>
                    <td>Minimum</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* RIGHT COLUMN - SIDEBAR */}
          <div className="courses-right">

            {/* Featured Course Card */}
            <div className="new-courses-card">
              <h4>Featured Specialization</h4>
              <div className="course-item">
                <div className="course-name">💻 Computer Science (Bifocal)</div>
                <div className="course-desc">
                  Master programming, data structures, web development, and software engineering principles.
                  Hands-on lab experience with modern tools and frameworks. Prepare for IT careers and competitive exams.
                </div>
              </div>
            </div>

            {/* Career Guidance Card */}
            <div className="career-card">
              <h4>Career Support</h4>
              <button className="career-btn">📋 Explore Career Paths</button>
            </div>

            {/* College Building Image */}
            <div className="college-img-box">
              <div className="college-img-placeholder">College Photo 1</div>
            </div>

            {/* Learning Outcomes Card */}
            <div className="exam-scores-card">
              <h4>Learning Outcomes</h4>
              <div className="score-item">
                <span className="score-label">Critical Thinking</span>
                <span className="score-value">⭐⭐⭐⭐⭐</span>
              </div>
              <div className="score-item">
                <span className="score-label">Problem Solving</span>
                <span className="score-value">⭐⭐⭐⭐⭐</span>
              </div>
              <div className="score-item">
                <span className="score-label">Teamwork & Communication</span>
                <span className="score-value">⭐⭐⭐⭐⭐</span>
              </div>
              <div className="score-item">
                <span className="score-label">Research & Analysis</span>
                <span className="score-value">⭐⭐⭐⭐</span>
              </div>
              <div className="score-item">
                <span className="score-label">Leadership Skills</span>
                <span className="score-value">⭐⭐⭐⭐⭐</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* News bar */}
      <div className="news-bar">
        <strong>📚 Latest Update:</strong> New Computer Science lab inaugurated with cutting-edge equipment and software.
      </div>

      <Footer />
    </>
  );
}

export default Courses;