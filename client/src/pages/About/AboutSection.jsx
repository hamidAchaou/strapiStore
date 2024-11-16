// components/AboutSection.js
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaBehance,
  FaQuoteLeft,
} from "react-icons/fa";

const AboutSection = () => (
  <div className="about-us">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="left-image">
            <img src="assets/images/about-left-image.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="right-content">
            <h4>About Us &amp; Our Skills</h4>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod kon tempor incididunt ut labore.
            </span>
            <div className="quote">
              <FaQuoteLeft /> {/* Replaced the FontAwesome quote icon */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiuski smod kon tempor incididunt ut labore.
              </p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod kon tempor incididunt ut labore et dolore magna aliqua ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <ul>
              <li>
                <a href="#">
                  <FaFacebook /> {/* Replaced with Facebook icon */}
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter /> {/* Replaced with Twitter icon */}
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedin /> {/* Replaced with LinkedIn icon */}
                </a>
              </li>
              <li>
                <a href="#">
                  <FaBehance /> {/* Replaced with Behance icon */}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutSection;
