import "../../pages/Facilities.css";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Footer from "../Footer";

function Gymnasium() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="facilities-wrapper">
        <div className="facilities-container">
          <div className="section-title">Facilities — Gymnasium</div>
          <div className="facilities-card">

            <p className="facilities-intro">
              WMJC takes the physical health and fitness of its students and staff very seriously.
              The college gymnasium is a state-of-the-art facility equipped with modern fitness
              equipment to promote a healthy lifestyle. It is open not just to students and staff
              but also to outsiders at concessional rates.
            </p>

            <div className="facility-section">
              <h3>Gymnasium</h3>
              <div className="facility-images">
                <div className="facility-img-placeholder">Gymnasium Photo 1</div>
                <div className="facility-img-placeholder">Gymnasium Photo 2</div>
                <div className="facility-img-placeholder">Gymnasium Photo 3</div>
              </div>
              <p>
                The college has a well equipped, air conditioned gymnasium. This gymnasium is open
                for all – staff, students and outsiders. It is supervised by a trained fitness
                instructor who guides members on proper use of equipment and personalized fitness plans.
              </p>
            </div>

            <div className="facility-section">
              <h3>Equipment Available</h3>
              <ul className="facility-list">
                <li>Treadmills and cardio machines for cardiovascular fitness</li>
                <li>Free weights — dumbbells, barbells and weight plates</li>
                <li>Multi-gym station for full body strength training</li>
                <li>Leg press, chest press and shoulder press machines</li>
                <li>Pull-up bars, parallel bars and stretching area</li>
                <li>Cycling machines and rowing machines</li>
              </ul>
            </div>

            <div className="facility-section">
              <h3>Gymnasium Timings</h3>
              <p>
                The gymnasium is open from Monday to Saturday. Morning session is from 6:00 AM to
                9:00 AM and the evening session is from 4:00 PM to 7:00 PM. Special batches are
                arranged for female students and staff. A trained fitness instructor is present
                during all sessions to guide and assist members.
              </p>
            </div>

            <div className="facility-section">
              <h3>Membership &amp; Fees</h3>
              <p>
                Students of the college can avail gymnasium membership at highly concessional rates.
                Staff members are also eligible for discounted membership. Outsiders can join at
                nominal charges. For membership details and fee structure, please contact the
                college office or the gymnasium in-charge directly.
              </p>
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

export default Gymnasium;