import React from "react";
import coin from "../../resources/images/jrdlogock.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Collapse from "bootstrap/js/dist/collapse";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    toggleMenu();
  };

  const handleGalleryClick = (e) => {
    if (location.pathname === "/gallery") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    toggleMenu();
  };

  const toggleMenu = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse) {
      const bsCollapse = Collapse.getInstance(navbarCollapse) || new Collapse(navbarCollapse);
      navbarCollapse.classList.contains("show") ? bsCollapse.hide() : bsCollapse.show();
    }
  };

  const staticLinkProps = {
    className: "nav-link text-white text-decoration-none",
    onMouseEnter: (e) => (e.target.style.textDecoration = "underline"),
    onMouseLeave: (e) => (e.target.style.textDecoration = "none"),
    onClick: toggleMenu,
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-opacity-75 fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <img src={coin} alt="JRD Logo" style={{ maxHeight: "51px", height: "auto", width: "auto" }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav text-end">
            <li className="nav-item">
              <Link
                to="/"
                onClick={handleHomeClick}
                className={`nav-link ${
                  location.pathname === "/" ? "text-warning border-bottom border-warning" : "text-white"
                }`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a href="#how" {...staticLinkProps}>How to work</a>
            </li>
            <li className="nav-item">
              <a href="#tokens" {...staticLinkProps}>JRD & JRDT</a>
            </li>
            <li className="nav-item">
              <a href="#about" {...staticLinkProps}>About Us</a>
            </li>
            <li className="nav-item">
              <Link
                to="/gallery"
                onClick={handleGalleryClick}
                className={`nav-link ${
                  location.pathname === "/gallery" ? "text-warning border-bottom border-warning" : "text-white"
                }`}
              >
                Raccon's Gallery
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
