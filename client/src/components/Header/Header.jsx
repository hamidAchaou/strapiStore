import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "/assets/images/logo.webp";
import "./header.css";

const Header = () => {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* ***** Logo Start ***** */}
              <Link to="/" className="logo">
                <img
                  src={logo}
                  alt="Company Logo"
                  style={{ width: "150px", height: "auto" }} // Set width and auto height
                />
              </Link>
              {/* ***** Logo End ***** */}

              {/* ***** Menu Start ***** */}
              <ul className="nav">
                <li className="scroll-to-section">
                  <Link to="/" className="active">
                    Home
                  </Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="#men">Men's</Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="#women">Women's</Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="#kids">Kid's</Link>
                </li>
                <li className="submenu">
                  <Link to="javascript:;">Pages</Link>
                  <ul>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/products">Products</Link>
                    </li>
                    <li>
                      <Link to="/single-product">Single Product</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="javascript:;">Features</Link>
                  <ul>
                    <li>
                      <Link to="#">Features Page 1</Link>
                    </li>
                    <li>
                      <Link to="#">Features Page 2</Link>
                    </li>
                    <li>
                      <Link to="#">Features Page 3</Link>
                    </li>
                    <li>
                      <Link
                        rel="nofollow"
                        to="https://templatemo.com/page/4"
                        target="_blank"
                      >
                        Template Page 4
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="scroll-to-section">
                  <Link to="#explore">Explore</Link>
                </li>
              </ul>
              {/* Menu Trigger */}
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
              {/* ***** Menu End ***** */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
