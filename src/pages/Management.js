import "./Management.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Management() {
  const boardOfDirectors = [
    { name: "Dr. Ananad A. Pradhan", role: "Chairman" },
    { name: "Mr. Deepak P. Joshi", role: "Secretary" },
    { name: "Mr. Ravi V. Pranjape", role: "Trustee" },
    { name: "Mr. Shreedhar G. Gharat", role: "Trustee" },
    { name: "Mr. Ajit G. Karandikar", role: "Trustee" },
    { name: "Mr. Kiran R. Deshmukh", role: "Trustee" },
  ];

  const managingCommittee = [
    { name: "Dr. Anand A. Pradhan", role: "Hon. Chairman" },
    { name: "Suhas M. Kane", role: "Vice-Chairman" },
    { name: "Mr. Deepak P. Joshi", role: "Trustee & Hon. Secretary" },
    { name: "Mr. Venkatesh S. Iyer", role: "Treasurer" },
    { name: "Mr. Ravi Paranjape", role: "Hon. Trustee" },
    { name: "Mr. B.K. Choudhari", role: "Hon. Trustee & M.C. Member" },
    { name: "Mr. Shreedhar Gharat", role: "Hon. Trustee" },
    { name: "Mr. Kiran R. Deshmukh", role: "Trustee & M.C. Member" },
    { name: "Mr. Salil Pradhan", role: "Hon. Trustee" },
    { name: "Mr. Kiran R. Pradhan", role: "M.C. Member" },
    { name: "Mr. Jayant Gadre", role: "M.C. Member" },
    { name: "Mr. Atul Dharap", role: "M.C. Member" },
    { name: "Mr. Manoj More", role: "M.C. Member" },
    { name: "Mr. Vilas R. Khoburekar", role: "M.C. Member" },
  ];

  return (
    <>
      <Navbar />
      <Hero />

      <div className="management-wrapper">
        <div className="management-container">

          {/* LEFT */}
          <div className="management-left">
            <div className="section-title">Our Management</div>

            {/* Board of Directors */}
            <div className="management-card">
              <h3>Raosaheb Balaram Dnyandeo Thakur Vidyamandir</h3>
              <p className="subtitle">Most of the Members are past students of same institution</p>

              <table className="mgmt-table">
                <thead>
                  <tr>
                    <td colSpan="3">Board of Directors:</td>
                  </tr>
                </thead>
                <tbody>
                  {boardOfDirectors.map((member, i) => (
                    <tr key={i}>
                      <td>{i + 1}.</td>
                      <td>{member.name}</td>
                      <td>{member.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Managing Committee */}
            <div className="management-card">
              <table className="mgmt-table">
                <thead>
                  <tr>
                    <td colSpan="3">Managing Committee</td>
                  </tr>
                </thead>
                <tbody>
                  {managingCommittee.map((member, i) => (
                    <tr key={i}>
                      <td>{i + 1}.</td>
                      <td>{member.name}</td>
                      <td>{member.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* RIGHT */}
          <div className="management-right">
            <div className="photo-card">
              <div className="photo-placeholder">Management Photo</div>
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

export default Management;