import "./Activities.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function AcademicActivities() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="activities-wrapper">
        <div className="activities-container">

          {/* LEFT */}
          <div className="activities-left">
            <h2 className="activities-page-title">Academic Activities</h2>

            <div className="activity-card">

              {/* Commerce Seminar */}
              <div className="activity-item">
                <div className="activity-item-title">
                  <span className="activity-dot"></span>
                  Commerce Seminar
                </div>
                <p>
                  These guest presentations on various topics are given by commerce students,
                  the scope of which enables them to bridge the industry after college life.
                  Industry experts and professionals are invited to share their knowledge and
                  experience with students, helping them gain real-world insights into the
                  world of commerce, finance and entrepreneurship.
                </p>
                <div className="activity-inline-images">
                  <div className="activity-inline-placeholder">Commerce Seminar Photo 1</div>
                  <div className="activity-inline-placeholder">Commerce Seminar Photo 2</div>
                </div>
              </div>

              {/* Science Exhibition */}
              <div className="activity-item">
                <div className="activity-item-title">
                  <span className="activity-dot"></span>
                  Science Exhibition — JIGYASA
                </div>
                <p>
                  A Science exhibition is organized in the college with the motto of constantly
                  growing in map building. Students present innovative projects, models and
                  experiments that showcase their creativity and scientific understanding.
                </p>
                <p>
                  Overall, it aims to emphasize on interest of scientific skills among the crowd
                  and encourage its participants. The event draws participation from students
                  across all science streams and is judged by expert panels.
                </p>
                <div className="activity-inline-images">
                  <div className="activity-inline-placeholder">JIGYASA Photo 1</div>
                  <div className="activity-inline-placeholder">JIGYASA Photo 2</div>
                </div>
              </div>

              {/* Study Tours */}
              <div className="activity-item">
                <div className="activity-item-title">
                  <span className="activity-dot"></span>
                  Study Tours &amp; Industrial Visits
                </div>
                <p>
                  The college organizes study tours and industrial visits for students to provide
                  them with practical exposure beyond the classroom. These visits to industries,
                  research institutes and educational institutions help students connect theoretical
                  knowledge with real-world applications.
                </p>
                <div className="activity-inline-images">
                  <div className="activity-inline-placeholder">Study Tour Photo 1</div>
                  <div className="activity-inline-placeholder">Study Tour Photo 2</div>
                </div>
              </div>

              {/* Workshops */}
              <div className="activity-item">
                <div className="activity-item-title">
                  <span className="activity-dot"></span>
                  Workshops &amp; Guest Lectures
                </div>
                <p>
                  Regular workshops and guest lectures are organized throughout the academic year
                  to expose students to the latest developments in their respective fields. Eminent
                  academicians, industry professionals and subject matter experts are invited to
                  interact with students and share their knowledge and experience.
                </p>
                <div className="activity-inline-images">
                  <div className="activity-inline-placeholder">Workshop Photo 1</div>
                  <div className="activity-inline-placeholder">Workshop Photo 2</div>
                </div>
              </div>

              {/* Elocution & Debate */}
              <div className="activity-item">
                <div className="activity-item-title">
                  <span className="activity-dot"></span>
                  Elocution &amp; Debate Competitions
                </div>
                <p>
                  Elocution and debate competitions are regularly held to enhance the communication
                  skills and critical thinking of students. These competitions are conducted in
                  English, Hindi and Marathi. Students who excel at the college level are encouraged
                  to participate in inter-college competitions as well.
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="activities-right">
            <div className="academic-year-card">
              <h4>📅 Academic Activities 2025-2026</h4>
              <ul style={{ paddingLeft: "18px", fontSize: "13px", lineHeight: "2" }}>
                <li>Commerce Seminar — July 2025</li>
                <li>Science Exhibition JIGYASA — August 2025</li>
                <li>Industrial Visit — September 2025</li>
                <li>Workshop on Career Guidance — October 2025</li>
                <li>Elocution Competition — November 2025</li>
                <li>Debate Competition — December 2025</li>
                <li>Guest Lecture Series — January 2026</li>
                <li>Science Fest — February 2026</li>
              </ul>
            </div>

            <div className="right-photo">
              <div style={{ width:"100%", height:"100%", background:"#2c5fa8", display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(255,255,255,0.5)", fontSize:"13px" }}>
                Academic Activity Photo 1
              </div>
            </div>

            <div className="right-photo">
              <div style={{ width:"100%", height:"100%", background:"#1a4a80", display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(255,255,255,0.5)", fontSize:"13px" }}>
                Academic Activity Photo 2
              </div>
            </div>

            <div className="competitions-card">
              <h4>↔ Various Competitions</h4>
              <div className="video-grid">
                <div className="video-thumb">
                  <div className="video-play-icon">▶</div>
                  <span>Science Exhibition</span>
                </div>
                <div className="video-thumb">
                  <div className="video-play-icon">▶</div>
                  <span>Commerce Seminar</span>
                </div>
              </div>
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

export default AcademicActivities;