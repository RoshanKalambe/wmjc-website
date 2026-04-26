import "../../pages/Facilities.css";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Footer from "../Footer";

function Laboratory() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="facilities-wrapper">
        <div className="facilities-container">
          <div className="section-title">Facilities — Laboratory</div>
          <div className="facilities-card">

            <p className="facilities-intro">
              The college offers all modern facilities including well equipped laboratories for all
              science subjects. The laboratories are designed to provide hands-on learning experience
              and are maintained to the highest standards to ensure safety and efficiency for both
              students and staff.
            </p>

            <div className="facility-section">
              <h3>Physics Laboratory</h3>
              <div className="facility-images">
                <div className="facility-img-placeholder">Physics Lab Photo</div>
              </div>
              <p>
                The Physics laboratory is equipped with all modern instruments and apparatus required
                for practical experiments as per the HSC syllabus. Students perform experiments related
                to mechanics, optics, electricity, magnetism and modern physics. The lab has adequate
                seating capacity and all safety measures are in place.
              </p>
            </div>

            <div className="facility-section">
              <h3>Chemistry Laboratory</h3>
              <div className="facility-images">
                <div className="facility-img-placeholder">Chemistry Lab Photo</div>
              </div>
              <p>
                The Chemistry laboratory is well furnished with modern equipment, chemicals and glassware
                required for practical experiments. It has proper ventilation, exhaust fans and safety
                equipment like fire extinguishers and first aid kits. Both organic and inorganic chemistry
                practicals are conducted here.
              </p>
            </div>

            <div className="facility-section">
              <h3>Biology Laboratory</h3>
              <div className="facility-images">
                <div className="facility-img-placeholder">Biology Lab Photo</div>
              </div>
              <p>
                The Biology laboratory is equipped with compound microscopes, specimen slides, charts,
                models and all apparatus required for botany and zoology practicals. Students get
                hands-on experience with dissection, microscopy and biological specimen study as per
                the HSC curriculum.
              </p>
            </div>

            <div className="facility-section">
              <h3>Computer / IT Laboratory</h3>
              <div className="facility-images">
                <div className="facility-img-placeholder">Computer Lab Photo</div>
              </div>
              <p>
                The Computer laboratory is equipped with modern computers with the latest software
                and high-speed internet connectivity. Students of Computer Science and IT subjects
                use this lab for their practical sessions. The lab has a dedicated server and all
                systems are regularly updated and maintained.
              </p>
            </div>

            <div className="facility-section">
              <h3>Electrical Maintenance Laboratory</h3>
              <div className="facility-images">
                <div className="facility-img-placeholder">Electrical Lab Photo</div>
              </div>
              <p>
                The Electrical Maintenance laboratory provides students with practical knowledge of
                residential, commercial and industrial electrical circuits. It is equipped with
                modern tools, instruments and training boards. Students learn hands-on skills in
                wiring, circuit assembly and fault diagnosis under expert supervision.
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

export default Laboratory;