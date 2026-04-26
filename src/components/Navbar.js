import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const toggleMenu = (menuName) => setOpenMenu(openMenu === menuName ? null : menuName);
  const closeMenu = () => setOpenMenu(null);

  return (
    <div className="navbar">
      <div className="nav-left">

        {/* About */}
        <div className="nav-dropdown">
          <span className="nav-dropdown-toggle" onClick={() => toggleMenu("about")}>About ▾</span>
          {openMenu === "about" && (
            <div className="dropdown-menu">
              <Link to="/" onClick={closeMenu}>Welcome To WMJC</Link>
              <Link to="/management" onClick={closeMenu}>Management</Link>
              <Link to="/vice-principal" onClick={closeMenu}>Vice Principal's Desk</Link>
            </div>
          )}
        </div>

        {/* Courses */}
        <div className="nav-dropdown">
          <span className="nav-dropdown-toggle" onClick={() => toggleMenu("courses")}>Courses ▾</span>
          {openMenu === "courses" && (
            <div className="dropdown-menu">
              <Link to="/courses" onClick={closeMenu}>All Courses</Link>
            </div>
          )}
        </div>

        {/* Facilities */}
        <div className="nav-dropdown">
          <span className="nav-dropdown-toggle" onClick={() => toggleMenu("facilities")}>Facilities ▾</span>
          {openMenu === "facilities" && (
            <div className="dropdown-menu">
              <Link to="/facilities/laboratory" onClick={closeMenu}>Laboratory</Link>
              <Link to="/facilities/library" onClick={closeMenu}>Library</Link>
              <Link to="/facilities/gymkhana" onClick={closeMenu}>Gymkhana</Link>
              <Link to="/facilities/gymnasium" onClick={closeMenu}>Gymnasium</Link>
              <Link to="/facilities/playground" onClick={closeMenu}>Play Ground</Link>
              <Link to="/facilities/canteen" onClick={closeMenu}>Canteen</Link>
            </div>
          )}
        </div>

        {/* Activities */}
        <div className="nav-dropdown">
          <span className="nav-dropdown-toggle" onClick={() => toggleMenu("activities")}>Activities ▾</span>
          {openMenu === "activities" && (
            <div className="dropdown-menu">
              <Link to="/activities/academic" onClick={closeMenu}>Academic Activities</Link>
              <Link to="/activities/extra-curricular" onClick={closeMenu}>Extra Curricular Activities</Link>
            </div>
          )}
        </div>

        {/* Faculty */}
        <Link to="/faculty" onClick={closeMenu}>Faculty</Link>

        {/* Admission */}
        <div className="nav-dropdown">
          <span className="nav-dropdown-toggle" onClick={() => toggleMenu("admission")}>Admission ▾</span>
          {openMenu === "admission" && (
            <div className="dropdown-menu">
              <Link to="/admission" onClick={closeMenu}>Admission Guidelines</Link>
            </div>
          )}
        </div>

        {/* Contact */}
        <Link to="/contact" onClick={closeMenu}>Contact</Link>

        {/* Recruitment */}
        <div className="nav-dropdown">
          <span className="nav-dropdown-toggle" onClick={() => toggleMenu("recruitment")}>Recruitment ▾</span>
          {openMenu === "recruitment" && (
            <div className="dropdown-menu">
              <Link to="/recruitment/teaching-posts" onClick={closeMenu}>Teaching Posts</Link>
              <Link to="/recruitment/non-teaching-posts" onClick={closeMenu}>Non-Teaching Posts</Link>
              <Link to="/recruitment/application-form" onClick={closeMenu}>Application Form</Link>
            </div>
          )}
        </div>

        {/* RTI */}
        <div className="nav-dropdown">
          <span className="nav-dropdown-toggle" onClick={() => toggleMenu("rti")}>RTI ▾</span>
          {openMenu === "rti" && (
            <div className="dropdown-menu">
              <Link to="/rti/act-2005" onClick={closeMenu}>RTI Act 2005</Link>
              <Link to="/rti/pio-details" onClick={closeMenu}>Public Information Officer</Link>
              <Link to="/rti/application" onClick={closeMenu}>RTI Application</Link>
              <Link to="/rti/annual-report" onClick={closeMenu}>Annual Report</Link>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}

export default Navbar;