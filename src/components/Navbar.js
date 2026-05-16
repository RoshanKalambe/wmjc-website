import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  const closeMenus = () => {
    setOpenMenu(null);
    setIsMobileMenuOpen(false);
  };

  const NavLink = ({ to, children, isDropdown = false }) => (
    <Link to={to} onClick={closeMenus} className={`nav-link ${isActive(to) ? "active" : ""}`}>
      {children}
    </Link>
  );

  const DropdownToggle = ({ name, label, children }) => (
    <div className={`nav-dropdown ${openMenu === name ? "open" : ""}`}>
      <button
        className={`nav-dropdown-toggle ${openMenu === name ? "active" : ""}`}
        onClick={() => toggleMenu(name)}
      >
        <span>{label}</span>
        <svg className="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      {openMenu === name && <div className="dropdown-menu">{children}</div>}
    </div>
  );

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""} ${isMobileMenuOpen ? "mobile-open" : ""}`}>
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="nav-brand" onClick={closeMenus}>
            <span className="brand-icon">📚</span>
            <span className="brand-text">Demo-College</span>
          </Link>

          {/* Desktop Menu */}
          <div className="nav-desktop">
            <DropdownToggle name="about" label="About">
              <NavLink to="/">Welcome To Demo-College</NavLink>
              <NavLink to="/management">Management</NavLink>
              <NavLink to="/vice-principal">Vice Principal</NavLink>
            </DropdownToggle>

            <DropdownToggle name="courses" label="Courses">
              <NavLink to="/courses">All Courses</NavLink>
            </DropdownToggle>

            <DropdownToggle name="facilities" label="Facilities">
              <NavLink to="/facilities/laboratory">Laboratory</NavLink>
              <NavLink to="/facilities/library">Library</NavLink>
              <NavLink to="/facilities/gymkhana">Gymkhana</NavLink>
              <NavLink to="/facilities/gymnasium">Gymnasium</NavLink>
              <NavLink to="/facilities/playground">Playground</NavLink>
              <NavLink to="/facilities/canteen">Canteen</NavLink>
            </DropdownToggle>

            <DropdownToggle name="activities" label="Activities">
              <NavLink to="/activities/academic">Academic</NavLink>
              <NavLink to="/activities/extra-curricular">Extra Curricular</NavLink>
            </DropdownToggle>

            <NavLink to="/faculty">Faculty</NavLink>

            <DropdownToggle name="admission" label="Admission">
              <NavLink to="/admission">Guidelines</NavLink>
            </DropdownToggle>

            <DropdownToggle name="recruitment" label="Recruitment">
              <NavLink to="/recruitment/teaching-posts">Teaching Posts</NavLink>
              <NavLink to="/recruitment/non-teaching-posts">Non-Teaching Posts</NavLink>
              <NavLink to="/recruitment/application-form">Apply</NavLink>
            </DropdownToggle>

            <DropdownToggle name="rti" label="RTI">
              <NavLink to="/rti/act-2005">RTI Act 2005</NavLink>
              <NavLink to="/rti/pio-details">PIO Details</NavLink>
              <NavLink to="/rti/application">Application</NavLink>
              <NavLink to="/rti/annual-report">Annual Report</NavLink>
            </DropdownToggle>

            <NavLink to="/contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            {/* About */}
            <div className="mobile-dropdown">
              <button
                className="mobile-dropdown-toggle"
                onClick={() => toggleMenu("mobile-about")}
              >
                About
                <svg className="dropdown-icon" viewBox="0 0 24 24">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {openMenu === "mobile-about" && (
                <div className="mobile-dropdown-menu">
                  <NavLink to="/">Welcome To Demo-College</NavLink>
                  <NavLink to="/management">Management</NavLink>
                  <NavLink to="/vice-principal">Vice Principal</NavLink>
                </div>
              )}
            </div>

            {/* Courses */}
            <div className="mobile-dropdown">
              <button
                className="mobile-dropdown-toggle"
                onClick={() => toggleMenu("mobile-courses")}
              >
                Courses
                <svg className="dropdown-icon" viewBox="0 0 24 24">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {openMenu === "mobile-courses" && (
                <div className="mobile-dropdown-menu">
                  <NavLink to="/courses">All Courses</NavLink>
                </div>
              )}
            </div>

            {/* Facilities */}
            <div className="mobile-dropdown">
              <button
                className="mobile-dropdown-toggle"
                onClick={() => toggleMenu("mobile-facilities")}
              >
                Facilities
                <svg className="dropdown-icon" viewBox="0 0 24 24">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {openMenu === "mobile-facilities" && (
                <div className="mobile-dropdown-menu">
                  <NavLink to="/facilities/laboratory">Laboratory</NavLink>
                  <NavLink to="/facilities/library">Library</NavLink>
                  <NavLink to="/facilities/gymkhana">Gymkhana</NavLink>
                  <NavLink to="/facilities/gymnasium">Gymnasium</NavLink>
                  <NavLink to="/facilities/playground">Playground</NavLink>
                  <NavLink to="/facilities/canteen">Canteen</NavLink>
                </div>
              )}
            </div>

            {/* Activities */}
            <div className="mobile-dropdown">
              <button
                className="mobile-dropdown-toggle"
                onClick={() => toggleMenu("mobile-activities")}
              >
                Activities
                <svg className="dropdown-icon" viewBox="0 0 24 24">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {openMenu === "mobile-activities" && (
                <div className="mobile-dropdown-menu">
                  <NavLink to="/activities/academic">Academic</NavLink>
                  <NavLink to="/activities/extra-curricular">Extra Curricular</NavLink>
                </div>
              )}
            </div>

            {/* Faculty */}
            <NavLink to="/faculty">Faculty</NavLink>

            {/* Admission */}
            <div className="mobile-dropdown">
              <button
                className="mobile-dropdown-toggle"
                onClick={() => toggleMenu("mobile-admission")}
              >
                Admission
                <svg className="dropdown-icon" viewBox="0 0 24 24">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {openMenu === "mobile-admission" && (
                <div className="mobile-dropdown-menu">
                  <NavLink to="/admission">Guidelines</NavLink>
                </div>
              )}
            </div>

            {/* Recruitment */}
            <div className="mobile-dropdown">
              <button
                className="mobile-dropdown-toggle"
                onClick={() => toggleMenu("mobile-recruitment")}
              >
                Recruitment
                <svg className="dropdown-icon" viewBox="0 0 24 24">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {openMenu === "mobile-recruitment" && (
                <div className="mobile-dropdown-menu">
                  <NavLink to="/recruitment/teaching-posts">Teaching Posts</NavLink>
                  <NavLink to="/recruitment/non-teaching-posts">Non-Teaching Posts</NavLink>
                  <NavLink to="/recruitment/application-form">Apply</NavLink>
                </div>
              )}
            </div>

            {/* RTI */}
            <div className="mobile-dropdown">
              <button
                className="mobile-dropdown-toggle"
                onClick={() => toggleMenu("mobile-rti")}
              >
                RTI
                <svg className="dropdown-icon" viewBox="0 0 24 24">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {openMenu === "mobile-rti" && (
                <div className="mobile-dropdown-menu">
                  <NavLink to="/rti/act-2005">RTI Act 2005</NavLink>
                  <NavLink to="/rti/pio-details">PIO Details</NavLink>
                  <NavLink to="/rti/application">Application</NavLink>
                  <NavLink to="/rti/annual-report">Annual Report</NavLink>
                </div>
              )}
            </div>

            {/* Contact */}
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;