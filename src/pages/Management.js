import "./Management.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Management() {
  const boardOfDirectors = [
    { name: "Dr. Chairman sir", role: "Chairman" },
    { name: "Mr. Secretary Sir", role: "Secretary" },
    { name: "Mr. Trustee Sir", role: "Trustee" },
    { name: "Mr. Trustee Sir", role: "Trustee" },
    { name: "Mr. Trustee Sir", role: "Trustee" },
    { name: "Mr. Trustee Sir", role: "Trustee" },
  ];

  const managingCommittee = [
    { name: "Dr. Chairman sir", role: "Hon. Chairman" },
    { name: "Mr. Vice-Chairman Sir", role: "Vice-Chairman" },
    { name: "Mr. Secretary Sir", role: "Trustee & Hon. Secretary" },
    { name: "Mr. Treasurer Sir", role: "Treasurer" },
    { name: "Mr. Trustee Sir", role: "Hon. Trustee" },
    { name: "Mr. Trustee Sir", role: "Hon. Trustee & M.C. Member" },
    { name: "Mr. Trustee Sir", role: "Hon. Trustee" },
    { name: "Mr. Trustee Sir", role: "Trustee & M.C. Member" },
    { name: "Mr. Trustee Sir", role: "Hon. Trustee" },
    { name: "Mr. M.C. Member", role: "M.C. Member" },
    { name: "Mr. M.C. Member", role: "M.C. Member" },
    { name: "Mr. M.C. Member", role: "M.C. Member" },
    { name: "Mr. M.C. Member", role: "M.C. Member" },
    { name: "Mr. M.C. Member", role: "M.C. Member" },
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
              <h3>College Management Trustee's name</h3>
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
        <strong>College News:</strong> Demo College Office, New Telephone Number - 52215-69961 - PrJC 😊
      </div>
      <Footer />
    </>
  );
}

export default Management;