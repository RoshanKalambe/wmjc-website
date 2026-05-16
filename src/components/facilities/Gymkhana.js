import "../../pages/Facilities.css";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Footer from "../Footer";

function Gymkhana() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="facilities-wrapper">
        <div className="facilities-container">
          <div className="section-title">Facilities — Gymkhana</div>
          <div className="facilities-card">

            <p className="facilities-intro">
              The College Gymkhana is the hub of indoor sports and recreational activities at Demo-College.
              It promotes sportsmanship, teamwork and healthy competition among students. The Gymkhana
              encourages students to participate not just within the college but also in inter-college
              and state level competitions.
            </p>

            <div className="facility-section">
              <h3>Gymkhana</h3>
              <div className="facility-images">
                <div className="facility-img-placeholder">Gymkhana Photo 1</div>
                <div className="facility-img-placeholder">Gymkhana Photo 2</div>
              </div>
              <p>
                The College Gymkhana provides facilities for games such as Table Tennis, Chess, and
                Carom etc. Students are encouraged to have the benefit of this facility and also to
                participate in various inter college competitions.
              </p>
            </div>

            <div className="facility-section">
              <h3>Indoor Games Available</h3>
              <ul className="facility-list">
                <li><strong>Table Tennis</strong> — Multiple table tennis tables available for practice and tournaments.</li>
                <li><strong>Chess</strong> — Chess boards and coaching available for students interested in competitive chess.</li>
                <li><strong>Carom</strong> — Carom boards are available for recreational play and tournaments.</li>
                <li><strong>Badminton</strong> — Indoor badminton court available for practice sessions.</li>
              </ul>
            </div>

            <div className="facility-section">
              <h3>Inter-College Competitions</h3>
              <p>
                The Gymkhana actively nominates and trains students for various inter-college, district
                and state level competitions. Our students have consistently performed well and brought
                laurels to the college in various indoor sports events. The Gymkhana committee organizes
                annual sports tournaments within the college as well to identify and nurture talent.
              </p>
            </div>

            <div className="facility-section">
              <h3>Gymkhana Timings</h3>
              <p>
                The Gymkhana is open for students during college hours — Monday to Saturday from
                8:00 AM to 5:00 PM. Students can avail these facilities during free periods and
                after college hours with prior permission from the Gymkhana in-charge.
              </p>
            </div>

          </div>
        </div>
      </div>
      <div className="news-bar">
        <strong>College News:</strong> College Office, New Telephone Number - 52215-69961 - PrJC 😊
      </div>
      <Footer />
    </>
  );
}

export default Gymkhana;