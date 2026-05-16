import "./RTI.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function RTIAnnualReport() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="rti-wrapper">
        <div className="rti-container">
          <div className="section-title">RTI — Annual Report &amp; Disclosures</div>

          <div className="rti-card">
            <h3>Proactive Disclosure under Section 4 of RTI Act 2005</h3>
            <p>
              Under Section 4(1)(b) of the Right to Information Act 2005, every public authority
              is required to proactively publish certain categories of information so that citizens
              have minimum need to use the RTI Act. Below are the mandatory disclosures made by
              Wamanrao Muranjan Junior College.
            </p>
          </div>

          {/* Mandatory Disclosures */}
          <div className="rti-card">
            <h3>Mandatory Disclosures — Section 4(1)(b)</h3>

            <h4>i. Organisation &amp; Functions</h4>
            <table className="rti-table">
              <tbody>
                <tr><td><strong>Name of Institution</strong></td><td>Wamanrao Muranjan Junior College of Science and Commerce</td></tr>
                <tr><td><strong>Managed By</strong></td><td>Raosaheb Balaram Dnyandeo Thakur Vidyamandir</td></tr>
                <tr><td><strong>Year of Establishment</strong></td><td>2008</td></tr>
                <tr><td><strong>Affiliation</strong></td><td>Maharashtra State Board of Secondary and Higher Secondary Education</td></tr>
                <tr><td><strong>College Code</strong></td><td>1905</td></tr>
                <tr><td><strong>Type</strong></td><td>Junior College (FYJC &amp; SYJC)</td></tr>
                <tr><td><strong>Streams Offered</strong></td><td>Science, Commerce, Bifocal (Electrical Maintenance)</td></tr>
                <tr><td><strong>Total Intake Capacity</strong></td><td>Science: 240 | Commerce: 240 | Bifocal: 80</td></tr>
                <tr><td><strong>Address</strong></td><td>Sharadanilayam Complex, Neelam Nagar Phase-2, Mulund (East) – 400081</td></tr>
                <tr><td><strong>Phone</strong></td><td>022 – 21636755 / 022 – 25630347</td></tr>
                <tr><td><strong>Email</strong></td><td>wamanraojc@yahoo.in / info@wmjc.in</td></tr>
              </tbody>
            </table>

            <h4>ii. Powers &amp; Duties of Officers</h4>
            <table className="rti-table">
              <thead>
                <tr><th>Designation</th><th>Name</th><th>Powers &amp; Duties</th></tr>
              </thead>
              <tbody>
                <tr><td>Principal</td><td>Mr. Kumar Gaikwad</td><td>Overall administration, academic oversight, final authority on admissions and discipline</td></tr>
                <tr><td>Vice Principal</td><td>Mrs. Vedangi V. Kulkarni</td><td>Assists Principal, manages Commerce dept., handles student grievances</td></tr>
                <tr><td>Public Information Officer</td><td>Mr. Kumar Gaikwad</td><td>Handles RTI applications, provides information within stipulated time</td></tr>
              </tbody>
            </table>

            <h4>iii. Fee Structure (Academic Year 2025-26)</h4>
            <table className="rti-table">
              <thead>
                <tr><th>Stream</th><th>Annual Fees</th><th>Remarks</th></tr>
              </thead>
              <tbody>
                <tr><td>Science (General)</td><td>₹14,300</td><td>As per Govt. norms</td></tr>
                <tr><td>Commerce (General)</td><td>₹1,8800</td><td>As per Govt. norms</td></tr>
                <tr><td>Bifocal — Electrical Maintenance</td><td>₹16,000</td><td>Includes practical fees</td></tr>
                <tr><td>Gym Membership</td><td>Concessional</td><td>For students &amp; staff</td></tr>
              </tbody>
            </table>

            <h4>iv. Budget &amp; Expenditure</h4>
            <p>
              The college receives grants from the Maharashtra State Government for aided posts
              and infrastructure development. Detailed budget and expenditure statements are
              available for inspection at the college office during working hours as per the
              provisions of the RTI Act.
            </p>
          </div>

          {/* Annual Reports Download */}
          <div className="rti-card">
            <h3>Annual Reports — Download</h3>
            <p>
              The following annual reports and RTI disclosure documents are available for
              download. Physical copies can be obtained from the college office on payment
              of prescribed fees.
            </p>

            <div className="report-item">
              <div className="report-item-info">
                <h4>Annual Report 2024-25</h4>
                <p>Includes faculty details, student strength, results, activities and financial disclosures</p>
              </div>
              <button className="download-btn">⬇ Download PDF</button>
            </div>

            <div className="report-item">
              <div className="report-item-info">
                <h4>Annual Report 2023-24</h4>
                <p>Includes faculty details, student strength, results, activities and financial disclosures</p>
              </div>
              <button className="download-btn">⬇ Download PDF</button>
            </div>

            <div className="report-item">
              <div className="report-item-info">
                <h4>Annual Report 2022-23</h4>
                <p>Includes faculty details, student strength, results, activities and financial disclosures</p>
              </div>
              <button className="download-btn">⬇ Download PDF</button>
            </div>

            <div className="report-item">
              <div className="report-item-info">
                <h4>RTI Proactive Disclosure 2024-25</h4>
                <p>Section 4(1)(b) mandatory disclosure document</p>
              </div>
              <button className="download-btn">⬇ Download PDF</button>
            </div>

            <div className="report-item">
              <div className="report-item-info">
                <h4>RTI Proactive Disclosure 2023-24</h4>
                <p>Section 4(1)(b) mandatory disclosure document</p>
              </div>
              <button className="download-btn">⬇ Download PDF</button>
            </div>
          </div>

          <div className="rti-card">
            <h3>RTI Statistics</h3>
            <table className="rti-table">
              <thead>
                <tr>
                  <th>Academic Year</th>
                  <th>Applications Received</th>
                  <th>Replied Within 30 Days</th>
                  <th>Rejected</th>
                  <th>Appeals Filed</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>2024-25</td><td>4</td><td>4</td><td>0</td><td>0</td></tr>
                <tr><td>2023-24</td><td>3</td><td>3</td><td>0</td><td>0</td></tr>
                <tr><td>2022-23</td><td>2</td><td>2</td><td>0</td><td>0</td></tr>
                <tr><td>2021-22</td><td>1</td><td>1</td><td>0</td><td>0</td></tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
      <div className="news-bar">
        <strong>College News:</strong> Demo College Office, New Telephone Number - 52215-69961 - PrJC 😊
      </div>
      <Footer />
    </>
  );
}

export default RTIAnnualReport;