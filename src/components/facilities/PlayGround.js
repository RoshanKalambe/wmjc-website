import "../../pages/Facilities.css";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Footer from "../Footer";

function PlayGround() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="facilities-wrapper">
        <div className="facilities-container">
          <div className="section-title">Facilities — Play Ground</div>
          <div className="facilities-card">

            <p className="facilities-intro">
              Sports is an essential part of an educational institute. At WMJC, we strongly believe
              in the all-round development of students which includes physical fitness and sportsmanship.
              The college has a large playground that supports a variety of outdoor sports and activities
              throughout the academic year.
            </p>

            <div className="facility-section">
              <h3>Playground</h3>
              <div className="facility-images">
                <div className="facility-img-placeholder">Playground Photo 1</div>
                <div className="facility-img-placeholder">Playground Photo 2</div>
              </div>
              <p>
                We have a large playground with facilities for outdoor games such as Football,
                Volleyball, Cricket, etc. Annual sports are also conducted here. The ground is
                well maintained and provides ample space for multiple sports to be played simultaneously.
              </p>
            </div>

            <div className="facility-section">
              <h3>Sports Available</h3>
              <ul className="facility-list">
                <li><strong>Cricket</strong> — A proper cricket pitch with practice nets for batting and bowling practice.</li>
                <li><strong>Football</strong> — A full-size football ground with goal posts for practice and matches.</li>
                <li><strong>Volleyball</strong> — Volleyball court with standard net setup for practice and tournaments.</li>
                <li><strong>Kho-Kho</strong> — The college Kho-Kho team has participated in district level tournaments.</li>
                <li><strong>Athletics</strong> — Running track and space for field events like long jump and shot put.</li>
              </ul>
            </div>

            <div className="facility-section">
              <h3>Annual Sports Day</h3>
              <p>
                The college organizes an Annual Sports Day every year where students compete in
                various track and field events. It is a grand event that celebrates athletic talent
                and promotes the spirit of healthy competition. Prizes and certificates are awarded
                to winners and runners-up across all categories.
              </p>
            </div>

            <div className="facility-section">
              <h3>Inter-College Sports</h3>
              <p>
                Students are regularly selected and trained to represent the college in inter-college,
                district and state level sports competitions. The college provides necessary support
                including coaching, equipment and travel allowances for students participating in
                external competitions. Our teams have won several accolades at various levels.
              </p>
            </div>

            <div className="facility-section">
              <h3>Playground Timings</h3>
              <p>
                The playground is available to students before college hours (7:00 AM – 8:30 AM),
                during lunch break and after college hours (4:00 PM – 6:00 PM) on all working days.
                Students must obtain permission from the Physical Education teacher for organizing
                any special practice sessions or matches.
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

export default PlayGround;