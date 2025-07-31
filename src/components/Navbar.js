import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar() {
  const role = localStorage.getItem("role");
  const isMainAdmin = localStorage.getItem("isMainAdmin") === "true";
  const location = useLocation();
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const fiveHours = 5 * 60 * 60 * 1000;
  const logoutTime = new Date().getTime() + fiveHours;

  localStorage.setItem("logoutTime", logoutTime);
  

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "services", "contact"];
      let current = "";
      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = sec;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      const logoutTime = localStorage.getItem("logoutTime");
      if (logoutTime && new Date().getTime() > parseInt(logoutTime)) {
        localStorage.clear();
        navigate("/");
      }
    }, 60000); // check every 1 minute

    return () => clearInterval(interval);
  }, [navigate]);


  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  

  const isActive = (path) =>
    location.pathname === path ? "active" : "";

  const handleScrollLink = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const handleHomeClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">JobBridge</h1>

        <button
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button
            className={`scroll-link ${location.pathname === "/" ? "active" : ""}`}
            onClick={handleHomeClick}
          >
            Home
          </button>

          {["about", "services", "contact"].map((section) => (
            <button
              key={section}
              className={`scroll-link ${activeSection === section ? "active" : ""}`}
              onClick={() => handleScrollLink(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}

          <Link
            className={isActive("/career")}
            to="/career"
            onClick={() => setMenuOpen(false)}
          >
            Career
          </Link>

          {!role && (
            <Link
              className={isActive("/auth")}
              to="/auth"
              onClick={() => setMenuOpen(false)}
            >
              Login / Signup
            </Link>
          )}

          {role === "admin" && (
            <>
              <Link
                className={isActive("/dashboard")}
                to="/dashboard"
                onClick={() => setMenuOpen(false)}
              >
                Dashboard
              </Link>

              {isMainAdmin && (
                <Link
                  className={isActive("/main-admin")}
                  to="/main-admin"
                  onClick={() => setMenuOpen(false)}
                >
                  Main Admin
                </Link>
              )}
            </>
          )}

          {role && (
            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
