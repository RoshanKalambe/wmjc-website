import "../../pages/Facilities.css";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Footer from "../Footer";

function Canteen() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="facilities-wrapper">
        <div className="facilities-container">
          <div className="section-title">Facilities — Canteen</div>
          <div className="facilities-card">

            <p className="facilities-intro">
              WMJC provides excellent student amenities to ensure comfort and well-being of all
              students and staff on campus. The canteen, common rooms and other student facilities
              are designed to create a welcoming and supportive campus environment.
            </p>

            <div className="facility-section">
              <h3>Canteen</h3>
              <div className="facility-images">
                <div className="facility-img-placeholder">Canteen Photo 1</div>
                <div className="facility-img-placeholder">Canteen Photo 2</div>
              </div>
              <p>
                Good quality food at affordable rates is provided by the College Canteen. This
                facility is only for the use of staff and students of the College. The canteen
                serves a variety of nutritious snacks, meals and beverages throughout college hours.
                Hygiene and food quality are strictly monitored by the college administration.
              </p>
            </div>

            <div className="facility-section">
              <h3>Menu &amp; Pricing</h3>
              <p>
                The canteen offers a wide variety of food options including hot meals, sandwiches,
                snacks, juices and beverages at highly subsidized rates. Special meals are available
                during examination periods. The menu is regularly updated based on student feedback
                and seasonal availability. All food is prepared fresh daily under hygienic conditions.
              </p>
            </div>

            <div className="facility-section">
              <h3>Canteen Timings</h3>
              <p>
                The canteen is open from Monday to Saturday during college hours — from 8:00 AM to
                5:00 PM. It operates during all breaks including the lunch break. Students and staff
                can avail canteen services throughout the day. The canteen remains closed on Sundays
                and public holidays.
              </p>
            </div>

            <div className="facility-section">
              <h3>Student's Common Room</h3>
              <div className="facility-images">
                <div className="facility-img-placeholder">Common Room Photo</div>
              </div>
              <p>
                Boys and Girls separately enjoy their freedom and relaxation in their respective
                common rooms. The common rooms are spacious, well ventilated and equipped with
                comfortable seating. Students can use these rooms during free periods, lunch breaks
                and before or after college hours to relax, socialize or engage in group studies.
              </p>
            </div>

            <div className="facility-section">
              <h3>Reading Room</h3>
              <div className="facility-images">
                <div className="facility-img-placeholder">Reading Room Photo</div>
              </div>
              <p>
                Besides the Library, a separate reading room is available to all students for
                12 hours on working days. The reading room is equipped with adequate seating,
                good lighting and a peaceful atmosphere ideal for self-study. Students can bring
                their own study material or use the available newspapers and magazines for
                general reading. Strict silence is maintained in the reading room at all times.
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

export default Canteen;