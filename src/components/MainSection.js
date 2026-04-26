import "./MainSection.css";

function MainSection() {
  return (
    <>
      <div className="main-wrapper">
        <div className="main-container">

          {/* LEFT */}
          <div className="left-section">

            <h3>WELCOME TO WMJC</h3>

            <p>
              The Raosaheb Balaram Dnyandeo Thakur Vidyamandir's, Mulund was founded in 1937.
              It is one of the premiere junior colleges of science, Commerce and Bifocal streams
              providing quality education with modern facilities. The college is committed to the
              all-round development of students and is recognized by MSSTE.
            </p>

            <p className="blue-title">NEW SYLLABUS (DISTRIBUTION OF MARKS)</p>

            <table className="syllabus-table">
              <thead>
                <tr>
                  <th>Subjects</th>
                  <th>Marks Distribution</th>
                  <th>H.S.C Commerce &amp; SSC Board</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="3">Promotion Units H.S.C / S.S.C / B.C.C Board: 25 × 500 = 800 Marks</td>
                </tr>
                <tr>
                  <td>1539-1</td>
                  <td>Computer Science / Electronics</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Bifocal</td>
                  <td>Electronics</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1538-X</td>
                  <td colSpan="2">H.S.C Science &amp; SSC Board</td>
                </tr>
                <tr>
                  <td colSpan="3">Promotion Units (H.S.C / C.B.C.C / SSC Board): 25 × 500 = 600 Marks</td>
                </tr>
                <tr>
                  <td>1028-1</td>
                  <td>Octure</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2028-1</td>
                  <td>Promotion for June (JB Year = 1103-25)</td>
                  <td>🔥</td>
                </tr>
                <tr>
                  <td>2029-2</td>
                  <td>Sybmy gawsaithe xt 9 🎓</td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan="3">2022-2 FYJC Admission Information Booklet: Yr: 26-25 🔥</td>
                </tr>
              </tbody>
            </table>

            <p style={{ fontSize: "12px", marginBottom: "8px" }}>
              <strong>Result Syllabus &nbsp; With Toppers: Academics Year '24-25</strong>
            </p>

            <div className="result-box">
              <ul>
                <li>BYJC Admission Bellory 🎓</li>
                <li>Maharashtra Pegatly Safety 🏆</li>
                <li>GR Mahosalahy Safety 📋</li>
              </ul>
            </div>

          </div>

          {/* RIGHT */}
          <div className="right-section">

            <div className="calendar-card">
              <h4>WMJC Academic Calendar 2025–2026</h4>
              <ul>
                <li><strong>June 10, 2025</strong> – College Reopens</li>
                <li><strong>July 14, 2025</strong> – College Reopens</li>
                <li>
                  <strong>July 14, 2025</strong> – FYJC Distribution<br />
                  <em style={{ fontSize: "11px" }}>Scilify &amp; Computational Science Tax Syllabus, Raosaheb Guidelines Tablets, Connects result</em>
                </li>
                <li><strong>July 16, 2025</strong> – Sports Events</li>
                <li>
                  <strong>July 17, 2025</strong> – Investhere Community<br />
                  <em style={{ fontSize: "11px" }}>Information Cum gouge</em>
                </li>
                <li>
                  <strong>July 19, 2025</strong> – Frozen Teacher Meeting (FV/JC)<br />
                  <em style={{ fontSize: "11px" }}>2021 25 Pogle to Fire</em>
                </li>
                <li>
                  <strong>July 26, 2025</strong> – First Unit Test<br />
                  <em style={{ fontSize: "11px" }}>Knowthence in Msek</em>
                </li>
                <li>
                  <strong>Sept 28, 2025</strong> – Environment Week<br />
                  <em style={{ fontSize: "11px" }}>Tree Restoration Drive</em>
                </li>
              </ul>
            </div>

            <div className="notice-card">
              <h4>NOTICE BOARD</h4>
              <ul>
                <li>SY. J.C. Science Syllabus</li>
                <li>SY. J.C. Commerce Syllabus</li>
                <li>FY. J.C. Science &amp; Commerce Syllabus</li>
              </ul>
            </div>

          </div>

        </div>
      </div>

      {/* News bar */}
      <div className="news-bar">
        <strong>WMJC News:</strong> WMJC Office, New Telephone Number - 52215-69961 - PrJC 😊
      </div>
    </>
  );
}

export default MainSection;