import React from "react";

import {
  FaGithub,
  FaLinkedinIn,
  FaStackOverflow,
  FaInstagram,
} from "react-icons/fa";

import Section from "../shared/section";
import Logo from "../../images/logo.png";
import SocialIcon from "./social-icon";
import { scrollToSection } from "../utils/helpers";

import "./style.scss";

const Footer = () => {
  return (
    <Section background="dark" className="footer" id="footer">
      <div className="footer-content-wrapper">
        <div className="footer-logo">
          <img src={Logo} alt="JS Dev Hindi" />
        </div>
        <ul className="footer-menu-items">
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("education")}
          >
            Education
          </li>
        </ul>
        <div className="social-icons">
          <SocialIcon
            color="#0D2636"
            icon={<FaGithub />}
            link="https://github.com/sumiit-jaiswal"
          />
          <SocialIcon
            color="#0A66C2"
            icon={<FaLinkedinIn link="www.linkedin.com/in/sumiit-jaiswal" />}
          />
        </div>
        <div className="bottom-bar">
          <div className="copyright-text">
            <span>Email: sumitjaiswal263@gmail.com</span>
            <span>Mob: 9599399438</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
