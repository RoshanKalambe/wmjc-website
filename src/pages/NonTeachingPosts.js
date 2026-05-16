import "./Recruitment.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function NonTeachingPosts() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="recruitment-wrapper">
        <div className="recruitment-container">
          <div className="section-title">Recruitment — Non-Teaching Posts</div>

          <div className="recruitment-card">
            <h3>About Non-Teaching Positions</h3>
            <p>
              Demo College also invites applications for various
              non-teaching positions. These positions are essential for the smooth
              functioning of the college and provide vital support to the academic
              and administrative departments.
            </p>
            <p>
              All candidates must be graduates from a recognized university unless
              otherwise specified. Experience in a school or college environment will
              be an added advantage.
            </p>
          </div>

          <div className="recruitment-card">
            <h3>Available Non-Teaching Posts</h3>

            <div className="post-item">
              <h4>1. Lab Assistant — Science</h4>
              <ul>
                <li><strong>Qualification:</strong> B.Sc in Physics / Chemistry / Biology</li>
                <li><strong>Experience:</strong> Prior lab experience preferred</li>
                <li><strong>Duties:</strong> Maintaining lab equipment, assisting practicals, stock management</li>
                <li><strong>Type:</strong> Full Time</li>
              </ul>
            </div>

            <div className="post-item">
              <h4>2. Lab Assistant — Computer</h4>
              <ul>
                <li><strong>Qualification:</strong> B.Sc CS / BCA / Diploma in Computer Science</li>
                <li><strong>Experience:</strong> Basic hardware and software troubleshooting</li>
                <li><strong>Duties:</strong> Maintaining computer lab, assisting students during practicals</li>
                <li><strong>Type:</strong> Full Time</li>
              </ul>
            </div>

            <div className="post-item">
              <h4>3. Library Assistant</h4>
              <ul>
                <li><strong>Qualification:</strong> B.Lib (Required)</li>
                <li><strong>Experience:</strong> Library management experience preferred</li>
                <li><strong>Duties:</strong> Book issue/return, cataloguing, maintaining library records</li>
                <li><strong>Type:</strong> Full Time</li>
              </ul>
            </div>

            <div className="post-item">
              <h4>4. Clerk / Office Assistant</h4>
              <ul>
                <li><strong>Qualification:</strong> Graduate in any stream</li>
                <li><strong>Experience:</strong> Minimum 1 year office experience preferred</li>
                <li><strong>Duties:</strong> Data entry, filing, correspondence, fee collection assistance</li>
                <li><strong>Skills:</strong> Basic computer knowledge (MS Office, Tally preferred)</li>
                <li><strong>Type:</strong> Full Time</li>
              </ul>
            </div>

            <div className="post-item">
              <h4>5. Accountant</h4>
              <ul>
                <li><strong>Qualification:</strong> B.Com / M.Com</li>
                <li><strong>Experience:</strong> Minimum 2 years in accounts</li>
                <li><strong>Duties:</strong> Maintaining college accounts, fee records, audit support</li>
                <li><strong>Skills:</strong> Tally, MS Excel</li>
                <li><strong>Type:</strong> Full Time</li>
              </ul>
            </div>

            <div className="post-item">
              <h4>6. Peon / Support Staff</h4>
              <ul>
                <li><strong>Qualification:</strong> SSC pass or above</li>
                <li><strong>Experience:</strong> Not required</li>
                <li><strong>Duties:</strong> Housekeeping, errands, assisting office staff</li>
                <li><strong>Type:</strong> Full Time</li>
              </ul>
            </div>

            <div className="post-item">
              <h4>7. Security Guard</h4>
              <ul>
                <li><strong>Qualification:</strong> SSC pass</li>
                <li><strong>Experience:</strong> Prior security experience preferred</li>
                <li><strong>Duties:</strong> Campus security, entry/exit monitoring, maintaining discipline</li>
                <li><strong>Type:</strong> Full Time (Shifts)</li>
              </ul>
            </div>
          </div>

          <div className="recruitment-card">
            <h3>How to Apply</h3>
            <p>
              Interested candidates can apply by filling the online Application Form available
              on this website under the Recruitment section. You can also walk in with your
              resume and documents to the college office during working hours.
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

export default NonTeachingPosts;