import "./Activities.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function ExtraCircularActivities() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="activities-wrapper">
        <div className="activities-container">

          {/* LEFT */}
          <div className="activities-left">
            <h2 className="activities-page-title">Extra Curricular Activities</h2>

            <div className="activity-card">

              {/* Guru Poujan */}
              <div className="activity-item">
                <div className="activity-item-title">
                  <span className="activity-dot green"></span>
                  Guru Poujan
                </div>
                <p>
                  On Guru Purnima, the students worship their Guru and take their blessings to
                  be a good life and student. All faculties are required to be members of the
                  facilities. This sacred occasion strengthens the bond between teachers and
                  students and reinforces the importance of the Guru-Shishya tradition in
                  Indian culture.
                </p>
                <div className="activity-inline-images">
                  <div className="activity-inline-placeholder">Guru Poujan Photo 1</div>
                  <div className="activity-inline-placeholder">Guru Poujan Photo 2</div>
                </div>
              </div>

              {/* Picnic */}
              <div className="activity-item">
                <div className="activity-item-title">
                  <span className="activity-dot green"></span>
                  Picnic
                </div>
                <p>
                  Students picnic is a pleasant occasion in which a meal is taken outdoors,
                  usually counting take a beautiful landscape. Annual picnics are organized
                  to give students a break from their academic routine and provide them with
                  an opportunity to bond with their classmates and teachers in a relaxed and
                  joyful environment outside the college campus.
                </p>
                <div className="activity-inline-images">
                  <div className="activity-inline-placeholder">Picnic Photo 1</div>
                  <div className="activity-inline-placeholder">Picnic Photo 2</div>
                </div>
              </div>

              {/* Republic Day */}
              <div className="activity-item">
                <div className="activity-item-title">
                  <span className="flag-icon">🇮🇳</span>
                  Republic Day
                </div>
                <p>
                  Republic Day is celebrated with great enthusiasm and patriotic fervor at WMJC.
                  The National Flag is hoisted by the Principal, followed by the National Anthem
                  and cultural performances by students. The event instills a sense of national
                  pride and civic responsibility among all students and staff.
                </p>
                <div className="activity-inline-images">
                  <div className="activity-inline-placeholder">Republic Day Photo 1</div>
                  <div className="activity-inline-placeholder">Republic Day Photo 2</div>
                </div>
              </div>

              {/* Independence Day */}
              <div className="activity-item">
                <div className="activity-item-title">
                  <span className="flag-icon">🇮🇳</span>
                  Independence Day
                </div>
                <p>
                  Independence Day is observed on 15th August every year with flag hoisting,
                  patriotic songs, speeches and cultural programs. Students actively participate
                  in organizing and performing at the event. It is a reminder of the sacrifices
                  made by freedom fighters and an opportunity to renew our commitment to the
                  nation's progress.
                </p>
                <div className="activity-inline-images">
                  <div className="activity-inline-placeholder">Independence Day Photo 1</div>
                  <div className="activity-inline-placeholder">Independence Day Photo 2</div>
                </div>
              </div>

              {/* Rangoli Competition */}
              <div className="activity-item">
                <div className="activity-item-title">
                  <span className="activity-dot"></span>
                  Rangoli Competition
                </div>
                <p>
                  The college organizes Rangoli competitions during festival seasons, especially
                  during Diwali. Students display their artistic talent by creating beautiful
                  and colorful rangoli designs. These competitions encourage creativity,
                  teamwork and appreciation of Indian art and culture.
                </p>
                <div className="activity-inline-images">
                  <div className="activity-inline-placeholder">Rangoli Photo 1</div>
                  <div className="activity-inline-placeholder">Rangoli Photo 2</div>
                </div>
              </div>

              {/* Cultural Programs */}
              <div className="activity-item">
                <div className="activity-item-title">
                  <span className="activity-dot"></span>
                  Cultural Programs &amp; Competitions
                </div>
                <p>
                  The college regularly organizes various cultural programs including singing,
                  dance performances, elocution contests, debates, mono-acting and drama
                  competitions. Our students have won several accolades at the state level
                  in Mono Acting competitions for three consecutive years.
                </p>
                <div className="activity-inline-images">
                  <div className="activity-inline-placeholder">Cultural Program Photo 1</div>
                  <div className="activity-inline-placeholder">Cultural Program Photo 2</div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="activities-right">
            <div className="academic-year-card">
              <h4>📅 Extra Curricular 2025-2026</h4>
              <ul style={{ paddingLeft: "18px", fontSize: "13px", lineHeight: "2" }}>
                <li>Guru Purnima Celebration — July 2025</li>
                <li>Independence Day — August 15, 2025</li>
                <li>Rangoli Competition — October 2025</li>
                <li>Annual Picnic — November 2025</li>
                <li>Cultural Festival — December 2025</li>
                <li>Republic Day — January 26, 2026</li>
                <li>Annual Sports Day — February 2026</li>
                <li>Farewell Ceremony — March 2026</li>
              </ul>
            </div>

            <div className="right-photo">
              <div style={{ width:"100%", height:"100%", background:"#2c5fa8", display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(255,255,255,0.5)", fontSize:"13px" }}>
                Extra Curricular Photo 1
              </div>
            </div>

            <div className="right-photo">
              <div style={{ width:"100%", height:"100%", background:"#1a4a80", display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(255,255,255,0.5)", fontSize:"13px" }}>
                Extra Curricular Photo 2
              </div>
            </div>

            <div className="competitions-card">
              <h4>↔ Various Competitions</h4>
              <div className="video-grid">
                <div className="video-thumb">
                  <div className="video-play-icon">▶</div>
                  <span>Maharashtra Cultural Events</span>
                </div>
                <div className="video-thumb">
                  <div className="video-play-icon">▶</div>
                  <span>Rangoli Competition</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="news-bar">
        <strong>College News:</strong>Demo College Office, New Telephone Number - 52215-69961 - PrJC 😊
      </div>
      <Footer />
    </>
  );
}

export default ExtraCircularActivities;