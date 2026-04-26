import "./RTI.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function RTIPIODetails() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="rti-wrapper">
        <div className="rti-container">
          <div className="section-title">RTI — Public Information Officer</div>

          <div className="rti-card">
            <h3>About the Public Information Officer (PIO)</h3>
            <p>
              Under Section 5(1) of the Right to Information Act 2005, every public authority
              is required to designate one or more officers as Public Information Officers (PIOs).
              The PIO is responsible for providing information to citizens who request it under
              the RTI Act within the stipulated time frame of 30 days.
            </p>
            <p>
              Wamanrao Muranjan Junior College has designated the following officers to handle
              RTI applications and related matters.
            </p>
          </div>

          <div className="rti-card">
            <h3>Public Information Officer (PIO)</h3>
            <table className="rti-table">
              <thead>
                <tr>
                  <th>Detail</th>
                  <th>Information</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Name</td><td><strong>MR. KUMAR GAIKWAD</strong></td></tr>
                <tr><td>Designation</td><td>Principal</td></tr>
                <tr><td>Department</td><td>Administration</td></tr>
                <tr><td>Institution</td><td>Wamanrao Muranjan Junior College of Science and Commerce</td></tr>
                <tr><td>Address</td><td>Sharadanilayam Complex, Neelam Nagar Phase-2, Mulund (East) – 400081</td></tr>
                <tr><td>Phone</td><td>022 – 21636755 / 022 – 25630347</td></tr>
                <tr><td>Mobile</td><td>93216 69381</td></tr>
                <tr><td>Email</td><td>wamanraojc@yahoo.in / info@wmjc.in</td></tr>
                <tr><td>Office Hours</td><td>Monday to Saturday — 10:00 AM to 5:00 PM</td></tr>
              </tbody>
            </table>
          </div>

          <div className="rti-card">
            <h3>Assistant Public Information Officer (APIO)</h3>
            <table className="rti-table">
              <thead>
                <tr>
                  <th>Detail</th>
                  <th>Information</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Name</td><td><strong>MRS. VEDANGI V. KULKARNI</strong></td></tr>
                <tr><td>Designation</td><td>Vice Principal</td></tr>
                <tr><td>Department</td><td>Administration / Commerce</td></tr>
                <tr><td>Qualification</td><td>M.COM (E) · M.Phil</td></tr>
                <tr><td>Institution</td><td>Wamanrao Muranjan Junior College of Science and Commerce</td></tr>
                <tr><td>Address</td><td>Sharadanilayam Complex, Neelam Nagar Phase-2, Mulund (East) – 400081</td></tr>
                <tr><td>Phone</td><td>022 – 21636755 / 022 – 25630347</td></tr>
                <tr><td>Email</td><td>wamanraojc@yahoo.in</td></tr>
                <tr><td>Office Hours</td><td>Monday to Saturday — 10:00 AM to 5:00 PM</td></tr>
              </tbody>
            </table>
          </div>

          <div className="rti-card">
            <h3>First Appellate Authority</h3>
            <p>
              If a citizen is not satisfied with the response provided by the PIO or if no
              response is received within 30 days, they may file a First Appeal with the
              First Appellate Authority within 30 days of receiving the reply (or expiry of
              the time limit).
            </p>
            <table className="rti-table">
              <thead>
                <tr>
                  <th>Detail</th>
                  <th>Information</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Appellate Authority</td><td><strong>Secretary / Trustee</strong></td></tr>
                <tr><td>Institution</td><td>Raosaheb Balaram Dnyandeo Thakur Vidyamandir</td></tr>
                <tr><td>Address</td><td>Sharadanilayam Complex, Neelam Nagar Phase-2, Mulund (East) – 400081</td></tr>
                <tr><td>Phone</td><td>022 – 21636755</td></tr>
                <tr><td>Email</td><td>wamanraojc@yahoo.in</td></tr>
              </tbody>
            </table>
          </div>

          <div className="rti-card">
            <h3>Duties of the PIO</h3>
            <ul>
              <li>Receive RTI applications and fees from citizens.</li>
              <li>Provide information within 30 days of receiving an application.</li>
              <li>Transfer applications to concerned department PIOs within 5 days if needed.</li>
              <li>Reject applications citing valid reasons under Section 8 of the RTI Act.</li>
              <li>Maintain proper records of all RTI applications received and responses given.</li>
              <li>Assist citizens in framing their RTI applications if needed.</li>
            </ul>
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

export default RTIPIODetails;