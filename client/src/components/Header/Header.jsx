import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/assets/images/logo.webp";
import "./header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/products", label: "Products" },
    { path: "/contact", label: "Contact" },
    { path: "#explore", label: "Explore" },
  ];

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* Logo */}
              <Link to="/" className="logo">
                <img src={logo} alt="Company Logo" className="logo-img" />
              </Link>

              {/* Menu */}
              <ul className={`nav ${isMenuOpen ? "active" : ""}`}>
                {menuItems.map((item, index) => (
                  <li key={index} className="scroll-to-section">
                    <Link
                      to={item.path}
                      className={isActive(item.path) ? "active" : ""}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Menu Trigger */}
              <button
                className={`menu-trigger ${isMenuOpen ? "active" : ""}`}
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                aria-expanded={isMenuOpen}
              >
                <span>Menu</span>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
