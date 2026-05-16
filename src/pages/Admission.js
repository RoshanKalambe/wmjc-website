import "./Admission.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Admission() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="admission-wrapper">
        <div className="admission-container">

          {/* LEFT */}
          <div className="admission-left">
            <div className="section-title">Admission</div>

            {/* Guidelines */}
            <div className="admission-card">
              <h3>Admission Guidelines</h3>
              <p>
                Admission to all roles and fees are set by the Government on
                self-assessments of Maharashtra, as per their noted guidelines.
                The exemption of heading from the rule (out sub-admission, reaches
                in at admission results admission on the essentially in submissions
                are considered to apply). Now, on qualifying fees calling examination
                the program. To sue more achieved at time for after the soon-remembered
                in the writing in immediate an admission reliable uses a form monthly.
                More to sustain in at admission activity will also be communicated via
                mobile number in the Garrison form.
              </p>

              <h4>Results Online SSC / HSC</h4>
              <p>
                <strong>F.Y.J.C. online Admission Process Yr. 25–26 – Govt. Circular</strong>
              </p>

              <div className="accid-box">
                <strong>BASIC ACCID DETAILS</strong><br />
                Division: MC.GM-IMARD T<br />
                Name: DLC010 IN43<br />
                <strong>
                  Home: Raosaheb Balaram Dnyandeo Thakur Vidyamandir<br />
                  Wamanrao Muranjan Junior College
                </strong> · 1903<br />
                College Code: 1905<br />
                ETS Code: DLJO10597<br />
                IDR Bank Code: DUOJO10597
              </div>
            </div>

            {/* Fees Payment */}
            <div className="admission-card">
              <h3>THIS YEAR (25-25) FEES PAYMENT ONLY by DIGITAL MODE</h3>
              <h4>F.Y.J.C. Fee Structure</h4>
              <div className="fees-highlight">
                <p>General Fees: SSC &amp; ICSE ↑ ♦</p>
                <p>Commerce - Fees: <strong>₹18,800</strong></p>
                <p>Science - Prakosium Marafe mH fees – Rs. 14,300</p>
                <p>Science / IT Electrical Maintenance – 14,000 (std) · Rs. 16,000</p>
                <p>IDR Bank Code: DLJO32322</p>
                <br />
                <p>
                  <strong>
                    Please Note: Local admissions that will be given on separate merit list.
                  </strong>
                </p>
              </div>
            </div>

            {/* Intake Capacity */}
            <div className="admission-card">
              <h3>Intake Capacity of FYJC &amp; SYJC</h3>
              <table className="quota-table">
                <thead>
                  <tr>
                    <th rowSpan="2">Category</th>
                    <th rowSpan="2">Science</th>
                    <th className="quota-header" colSpan="2">Quota</th>
                    <th rowSpan="2">Commerce</th>
                    <th rowSpan="2">Quota</th>
                  </tr>
                  <tr>
                    <th className="quota-header">Bifocal Science</th>
                    <th className="quota-header">80</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Minority-Marathi Kapus</td><td>12</td><td></td><td></td><td>19</td><td>12</td></tr>
                  <tr><td>In-House</td><td>27</td><td></td><td></td><td>27</td><td>27</td></tr>
                  <tr><td>MC-GEN-WAG</td><td>66</td><td></td><td></td><td>66</td><td>66</td></tr>
                  <tr><td>Sib. = Reserved</td><td>17</td><td></td><td></td><td>17</td><td>23</td></tr>
                  <tr><td>Cultural Art</td><td>8</td><td></td><td></td><td>8</td><td>1</td></tr>
                  <tr><td>Sports</td><td>8</td><td></td><td></td><td>1</td><td>1</td></tr>
                  <tr><td>Physically Handicapped</td><td>4</td><td></td><td></td><td>4</td><td>3</td></tr>
                  <tr><td>SC./ST. (SCI-SRRE.8, NR)</td><td>183</td><td></td><td></td><td>159</td><td>30</td></tr>
                  <tr><td>+0%, OSC (SC-1, ST-2)</td><td>51</td><td></td><td></td><td>133</td><td>13</td></tr>
                  <tr className="total-row">
                    <td><strong>TOTAL</strong></td>
                    <td><strong>240</strong></td>
                    <td></td>
                    <td></td>
                    <td><strong>240</strong></td>
                    <td><strong>340</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* RIGHT */}
          <div className="admission-right">
            <div className="info-card">
              <h4>Results Online SSC / HSC</h4>
              <p>F.Y.J.C online Admission Process Yr. 25–26 – Govt. Circular</p>
              <br />
              <p><strong>BASIC ACCID DETAILS</strong></p>
              <p>Division: MC.GM-IMARD T</p>
              <p>Name: DLCSIO INKJ</p>
              <p>
                Home: Raosaheb Balaram Dnyandeo Thakur Vidyamandir<br />
                Wamanrao Muranjan Junior College · 1903
              </p>
              <p>College Code: 1905</p>
              <p>ETS Code: DLJO10597</p>
              <p>IDR Bank Code: DUOJO10597</p>
            </div>

            <div className="info-card">
              <h4>Important Dates</h4>
              <ul>
                <li>Registration Opens: June 1, 2025</li>
                <li>Merit List Round 1: June 20, 2025</li>
                <li>Merit List Round 2: July 5, 2025</li>
                <li>Merit List Round 3: July 20, 2025</li>
                <li>Last Date of Admission: July 31, 2025</li>
              </ul>
            </div>

            <div className="info-card">
              <h4>Documents Required</h4>
              <ul>
                <li>SSC / 10th Marksheet (Original + 2 copies)</li>
                <li>School Leaving Certificate</li>
                <li>Aadhar Card (Original + 2 copies)</li>
                <li>Caste Certificate (if applicable)</li>
                <li>Passport Size Photos (4 nos.)</li>
                <li>Income Certificate (if applicable)</li>
              </ul>
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

export default Admission;