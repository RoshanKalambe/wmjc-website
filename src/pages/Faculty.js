import "./Faculty.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Faculty() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="faculty-wrapper">
        <div className="faculty-container">
          <div className="section-title">Our Faculty</div>
          <p className="faculty-year">Year 2025-26</p>

          <div className="faculty-card">
            <div className="faculty-college-header">
              WAMANRAO MURANJANJUNIOR COLLEGE OF SCIENCE AND COMMERCE
            </div>

            {/* Principal */}
            <div className="faculty-principal-section">
              <h4>Principal</h4>
              <p>MR. KUMAR GAIKWAD</p>
              <span>A1.DOW, A/82HGO-S.Q/B.BM</span>
            </div>

            {/* Vice Principal */}
            <div className="faculty-principal-section">
              <h4>Vice-Principal</h4>
              <p>MRS. VEDANGI V. KULKARNI</p>
              <span>M.COM (E) · M.Phil</span>
            </div>

            {/* Faculty Table */}
            <table className="faculty-table">
              <tbody>
                {/* ENGLISH + PHYSICS headers */}
                <tr>
                  <td className="subject-header" colSpan="2">ENGLISH</td>
                  <td className="subject-header" colSpan="2">PHYSICS</td>
                </tr>
                <tr>
                  <td>MS. JOYCE J. SHETTY</td><td>M.A. B.ED</td>
                  <td>MRS. JYOTI S. PATKAR</td><td>M.SC B.ED</td>
                </tr>
                <tr>
                  <td>MRS. NURMIDY EYHIERYL</td><td>M.A. B.ED</td>
                  <td>MRS. SPRYPNO A. RAWAS</td><td>M.SC B.ED</td>
                </tr>
                <tr>
                  <td>PRE.E./SITSEN PEN MARTNI K.R./EMRCHEN PRLEJEC RANNIE JEIMAGE M. T</td>
                  <td>M.A. B.ED</td>
                  <td>MS. PRAKASI A. KAMPLE ATL. ARTLKAY K. KHNNIO. PRACHRPY. MAHISTAMPART</td>
                  <td>M.SC B.ED</td>
                </tr>

                {/* HINDI + BIOLOGY */}
                <tr>
                  <td className="subject-header" colSpan="2">HINDI</td>
                  <td className="subject-header" colSpan="2">BIOLOGY</td>
                </tr>
                <tr>
                  <td>MRS. SHKHARE S. NAYANA</td><td>M.A. B.ED</td>
                  <td>MRS. SWAPNA P. KAMBLE</td><td>M.SC B.ED</td>
                </tr>

                {/* IT + COMPUTER SCIENCE */}
                <tr>
                  <td className="subject-header" colSpan="2">INFORMATION TECHNOLOGY</td>
                  <td className="subject-header" colSpan="2">COMPUTER SCIENCE</td>
                </tr>
                <tr>
                  <td>MRS. ROHINI M. WARADKAR</td><td>MCA</td>
                  <td>MS. ANITA H. SHINDE</td><td>M.SC B.ED</td>
                </tr>

                {/* ORG. OF COMMERCE + COMPUTER SCIENCE */}
                <tr>
                  <td className="subject-header" colSpan="2">ORGANISATION OF COMMERCE</td>
                  <td className="subject-header" colSpan="2">COMPUTER SCIENCE</td>
                </tr>
                <tr>
                  <td>MRS. PALLAVI T. GAWAS</td><td>M.COM. M.B.ED</td>
                  <td>MRS. DEEPA R. PANCHAL</td><td>MCA B.ED</td>
                </tr>

                {/* ECONOMICS + LIBRARIAN */}
                <tr>
                  <td className="subject-header" colSpan="2">ECONOMICS</td>
                  <td className="subject-header" colSpan="2">LIBRARIAN</td>
                </tr>
                <tr>
                  <td>MRS. KISHORI P. PHADKE</td><td>M.A. B.ED</td>
                  <td>SMT. SHILPA H. MAHAJAN</td><td>B.LIB</td>
                </tr>

                {/* BOOK-KEEPING + PHYSICAL EDUCATION */}
                <tr>
                  <td className="subject-header" colSpan="2">BOOK-KEEPING AND A/C</td>
                  <td className="subject-header" colSpan="2">PHYSICAL EDUCATION</td>
                </tr>
                <tr>
                  <td>MRS. JAIZY L. ALLAPAT</td><td>M.COM B.ED</td>
                  <td>MR. VINOD L. BAGDE</td><td>B.A</td>
                </tr>

                {/* PHYSICAL EDUCATION + LAB ASSISTANT */}
                <tr>
                  <td className="subject-header" colSpan="2">PHYSICAL EDUCATION</td>
                  <td className="subject-header" colSpan="2">LAB ASSISTANT</td>
                </tr>
                <tr>
                  <td>MR. DURVESH V. SALUNKE</td><td>B.COM B.PED</td>
                  <td>MR. VINOD L. BAGDE</td><td>B.A</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Committee & PTA */}
          <div className="committee-card">
            <h3>Committee Incharge List 2025-26</h3>
            <p>Details of committee incharges for the academic year 2025-26 are available at the college office. Each committee is headed by a dedicated faculty member responsible for organizing and managing related activities throughout the year.</p>
          </div>

          <div className="committee-card">
            <h3>Parent Teacher Association</h3>
            <p>Yearly, around 3 meetings are conducted. Parents can meet class teachers on Saturdays between 3pm &amp; 5pm. The PTA plays a crucial role in fostering communication between parents and teachers to ensure the academic and personal growth of every student.</p>
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

export default Faculty;