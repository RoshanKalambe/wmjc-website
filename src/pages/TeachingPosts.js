import "./Recruitment.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function TeachingPosts() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="recruitment-wrapper">
        <div className="recruitment-container">
          <div className="section-title">Recruitment — Teaching Posts</div>

          <div className="recruitment-card">
            <h3>About Teaching Positions</h3>
            <p>
              Demo College of Science and Commerce invites applications
              from eligible and qualified candidates for teaching positions. The college is
              committed to providing quality education and seeks dedicated, experienced and
              passionate educators to join our team.
            </p>
            <p>
              All teaching staff must hold the required academic qualifications as per the
              Maharashtra State Board of Secondary and Higher Secondary Education norms.
              Preference will be given to candidates with prior teaching experience at the
              junior college level.
            </p>
          </div>

          <div className="recruitment-card">
            <h3>Available Teaching Posts</h3>

            <div className="post-item">
              <h4>1. Lecturer in Physics</h4>
              <ul>
                <li><strong>Qualification:</strong> M.Sc Physics + B.Ed (Required)</li>
                <li><strong>Experience:</strong> Minimum 1 year preferred</li>
                <li><strong>Subject:</strong> HSC Physics (Science Stream)</li>
                <li><strong>Type:</strong> Full Time</li>
              </ul>
            </div>

            <div className="post-item">
              <h4>2. Lecturer in Chemistry</h4>
              <ul>
                <li><strong>Qualification:</strong> M.Sc Chemistry + B.Ed (Required)</li>
                <li><strong>Experience:</strong> Minimum 1 year preferred</li>
                <li><strong>Subject:</strong> HSC Chemistry (Science Stream)</li>
                <li><strong>Type:</strong> Full Time</li>
              </ul>
            </div>

            <div className="post-item">
              <h4>3. Lecturer in Mathematics</h4>
              <ul>
                <li><strong>Qualification:</strong> M.Sc Mathematics + B.Ed (Required)</li>
                <li><strong>Experience:</strong> Minimum 1 year preferred</li>
                <li><strong>Subject:</strong> HSC Mathematics</li>
                <li><strong>Type:</strong> Full Time</li>
              </ul>
            </div>

            <div className="post-item">
              <h4>4. Lecturer in Commerce</h4>
              <ul>
                <li><strong>Qualification:</strong> M.Com + B.Ed (Required)</li>
                <li><strong>Experience:</strong> Minimum 1 year preferred</li>
                <li><strong>Subject:</strong> Book Keeping, Economics, Organisation of Commerce</li>
                <li><strong>Type:</strong> Full Time</li>
              </ul>
            </div>

            <div className="post-item">
              <h4>5. Lecturer in Computer Science / IT</h4>
              <ul>
                <li><strong>Qualification:</strong> MCA / M.Sc CS + B.Ed (Required)</li>
                <li><strong>Experience:</strong> Minimum 1 year preferred</li>
                <li><strong>Subject:</strong> Computer Science, Information Technology</li>
                <li><strong>Type:</strong> Full Time</li>
              </ul>
            </div>

            <div className="post-item">
              <h4>6. Lecturer in English</h4>
              <ul>
                <li><strong>Qualification:</strong> M.A English + B.Ed (Required)</li>
                <li><strong>Experience:</strong> Minimum 1 year preferred</li>
                <li><strong>Subject:</strong> HSC English (All Streams)</li>
                <li><strong>Type:</strong> Full Time</li>
              </ul>
            </div>

            <div className="post-item">
              <h4>7. Lecturer in Biology</h4>
              <ul>
                <li><strong>Qualification:</strong> M.Sc Biology / Zoology / Botany + B.Ed</li>
                <li><strong>Experience:</strong> Minimum 1 year preferred</li>
                <li><strong>Subject:</strong> HSC Biology (Science Stream)</li>
                <li><strong>Type:</strong> Full Time</li>
              </ul>
            </div>

            <div className="post-item">
              <h4>8. Lecturer in Hindi</h4>
              <ul>
                <li><strong>Qualification:</strong> M.A Hindi + B.Ed (Required)</li>
                <li><strong>Experience:</strong> Minimum 1 year preferred</li>
                <li><strong>Subject:</strong> HSC Hindi (All Streams)</li>
                <li><strong>Type:</strong> Full Time</li>
              </ul>
            </div>
          </div>

          <div className="recruitment-card">
            <h3>How to Apply</h3>
            <p>
              Interested candidates can apply by filling the online Application Form available
              on this website under the Recruitment section. You can also send your resume and
              supporting documents to the college office directly.
            </p>
            <p>
              <strong>Email:</strong> demo college@yahoo.in / info@democollege.in<br />
              <strong>Contact:</strong> 022 – 21636755 / 022 – 25630347<br />
              <strong>Timing:</strong> Monday to Saturday, 10 AM to 5 PM
            </p>
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

export default TeachingPosts;