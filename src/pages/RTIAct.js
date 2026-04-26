import "./RTI.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function RTIAct() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="rti-wrapper">
        <div className="rti-container">
          <div className="section-title">RTI — Right to Information Act 2005</div>

          <div className="rti-card">
            <h3>What is the RTI Act 2005?</h3>
            <p>
              The Right to Information Act 2005 (RTI Act) is a landmark legislation enacted
              by the Parliament of India that empowers every citizen of India to seek
              information from any public authority. The Act came into force on
              <strong> 12th October 2005</strong>.
            </p>
            <p>
              Wamanrao Muranjan Junior College of Science and Commerce, being a recognized
              and government-aided educational institution under the Maharashtra State Board
              of Secondary and Higher Secondary Education, is a public authority under the
              RTI Act and is committed to full transparency and proactive disclosure of
              information.
            </p>

            <div className="rti-highlight">
              <strong>Act Name:</strong> Right to Information Act, 2005<br />
              <strong>Enacted By:</strong> Parliament of India<br />
              <strong>Date of Enactment:</strong> 15th June 2005<br />
              <strong>Date of Commencement:</strong> 12th October 2005<br />
              <strong>Applicable To:</strong> All public authorities including Government-aided educational institutions
            </div>
          </div>

          <div className="rti-card">
            <h3>Objectives of the RTI Act</h3>
            <ul>
              <li>To promote transparency and accountability in the working of every public authority.</li>
              <li>To empower citizens to participate in the democratic process by accessing government information.</li>
              <li>To contain corruption and hold governments and their instrumentalities accountable to the governed.</li>
              <li>To ensure that citizens are informed about the functioning of public institutions.</li>
              <li>To harmonize conflicting interests while preserving the primacy of the democratic ideal.</li>
            </ul>
          </div>

          <div className="rti-card">
            <h3>Rights of Citizens Under RTI Act</h3>
            <p>Every citizen of India has the right to:</p>
            <ul>
              <li>Inspect works, documents and records of any public authority.</li>
              <li>Take notes, extracts or certified copies of documents or records.</li>
              <li>Take certified samples of material held by the public authority.</li>
              <li>Obtain information in the form of diskettes, floppies, tapes, video cassettes or in any other electronic mode.</li>
              <li>Obtain information through printouts where information is stored in a computer or other device.</li>
            </ul>
          </div>

          <div className="rti-card">
            <h3>Obligations of Public Authority (WMJC)</h3>
            <p>As a public authority, Wamanrao Muranjan Junior College is obligated to:</p>
            <ul>
              <li>Maintain all its records duly catalogued and indexed in a manner that facilitates easy access.</li>
              <li>Publish information proactively so that citizens have minimum need to use the RTI Act.</li>
              <li>Provide information in the prescribed format within <strong>30 days</strong> of receiving a request.</li>
              <li>Designate Public Information Officers (PIOs) to handle RTI applications.</li>
              <li>Publish annual reports disclosing information about the institution.</li>
            </ul>
          </div>

          <div className="rti-card">
            <h3>Time Limits for Response</h3>
            <table className="rti-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Type of Request</th>
                  <th>Time Limit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Normal RTI Application</td>
                  <td><strong>30 days</strong> from date of receipt</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Information concerning life or liberty of a person</td>
                  <td><strong>48 hours</strong></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Application through APIO (Assistant PIO)</td>
                  <td><strong>35 days</strong> from date of receipt</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>First Appeal</td>
                  <td>Within <strong>30 days</strong> of receiving RTI reply</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Second Appeal to State Information Commission</td>
                  <td>Within <strong>90 days</strong> of first appeal reply</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rti-card">
            <h3>Information Exempted Under RTI Act</h3>
            <p>
              Certain categories of information are exempt from disclosure under Section 8 of the RTI Act:
            </p>
            <ul>
              <li>Information that would prejudicially affect the sovereignty and integrity of India.</li>
              <li>Information expressly forbidden from disclosure by a court of law.</li>
              <li>Information that would cause a breach of privilege of Parliament or State Legislature.</li>
              <li>Commercial confidence, trade secrets or intellectual property.</li>
              <li>Personal information with no relationship to any public activity or interest.</li>
              <li>Information received in confidence from a foreign government.</li>
            </ul>
          </div>

          <div className="rti-card">
            <h3>RTI Fee Structure</h3>
            <div className="rti-highlight">
              <strong>Application Fee:</strong> ₹10/- (payable by Cash / DD / Postal Order)<br />
              <strong>Fee for information (A4 or A3 paper):</strong> ₹2/- per page<br />
              <strong>Fee for information in larger format:</strong> Actual cost<br />
              <strong>Fee for sample / material:</strong> Actual cost<br />
              <strong>Fee for information in diskette / floppy:</strong> ₹50/- per diskette<br />
              <strong>Fee for inspection of records:</strong> No fee for first hour; ₹5/- for each subsequent hour<br />
              <br />
              <strong>Note:</strong> Persons Below Poverty Line (BPL) are exempted from paying any fee.
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

export default RTIAct;