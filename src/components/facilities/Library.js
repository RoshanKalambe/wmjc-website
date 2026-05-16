import "../../pages/Facilities.css";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Footer from "../Footer";

function Library() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="facilities-wrapper">
        <div className="facilities-container">
          <div className="section-title">Facilities — Library</div>
          <div className="facilities-card">

            <p className="facilities-intro">
              The college library is a rich repository of knowledge and learning resources. It is
              designed to support academic excellence and encourage a culture of reading and
              self-study among students and staff. The library is open throughout college hours
              and provides a calm, focused environment for study.
            </p>

            <div className="facility-section">
              <h3>Library</h3>
              <div className="facility-images">
                <div className="facility-img-placeholder">Library Photo 1</div>
                <div className="facility-img-placeholder">Library Photo 2</div>
              </div>
              <p>
                Our library has a large collection of books &amp; magazines on a variety of subjects.
                Students can sit in the library &amp; refer the books or continue with their own studies.
                The library is well organized with separate sections for Science, Commerce, Arts,
                reference books, periodicals and magazines.
              </p>
            </div>

            <div className="facility-section">
              <h3>Book Collection</h3>
              <p>
                The library houses thousands of books covering all subjects taught at the junior
                college level including Physics, Chemistry, Biology, Mathematics, Computer Science,
                Book Keeping, Economics, English Literature and more. New books are added regularly
                to keep the collection updated with the latest editions and publications.
              </p>
            </div>

            <div className="facility-section">
              <h3>Magazines &amp; Periodicals</h3>
              <p>
                A wide range of educational magazines, newspapers, journals and periodicals are
                subscribed to by the library. These help students stay updated with current affairs,
                scientific developments and general knowledge — essential for competitive examinations.
              </p>
            </div>

            <div className="facility-section">
              <h3>Reading Room</h3>
              <div className="facility-images">
                <div className="facility-img-placeholder">Reading Room Photo</div>
              </div>
              <p>
                Besides the library, a separate reading room is available to all students for 12 hours
                on working days. The reading room provides a quiet and comfortable space where students
                can concentrate on their studies without any disturbance.
              </p>
            </div>

            <div className="facility-section">
              <h3>Library Rules</h3>
              <ul className="facility-list">
                <li>Students must carry their Identity Card while visiting the library.</li>
                <li>Silence must be maintained inside the library at all times.</li>
                <li>Books can be issued for a period of 7 days and renewed on request.</li>
                <li>Damage or loss of library books will attract a fine as per college rules.</li>
                <li>Mobile phones must be kept on silent mode inside the library.</li>
                <li>Food and beverages are strictly not allowed inside the library.</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      <div className="news-bar">
        <strong>college News:</strong> college Office, New Telephone Number - 52215-69961 - PrJC 😊
      </div>
      <Footer />
    </>
  );
}

export default Library;