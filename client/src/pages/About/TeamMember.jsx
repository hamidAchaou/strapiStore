// components/TeamMember.js
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaBehance,
} from "react-icons/fa"; // Import icons from react-icons/fa

const TeamMember = ({ name, role, image }) => (
  <div className="col-lg-4">
    <div className="team-item">
      <div className="thumb">
        <div className="hover-effect">
          <div className="inner-content">
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
        <img src={image} alt={name} />
      </div>
      <div className="down-content">
        <h4>{name}</h4>
        <span>{role}</span>
      </div>
    </div>
  </div>
);

export default TeamMember;
