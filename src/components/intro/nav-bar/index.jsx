import React, { useState } from "react";

import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

import logo from "../../../images/logo.png";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";

import "./style.scss";

const Navigation = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const menuItemClickHandler = (section) => {
    setMobileMenu(!mobileMenu);
    scrollToSection(section);
  };
  return (
    <div className="top-navigation-bar">
      <div className="logo">
        <img src={logo} alt="Sumit Jaiswal" />
      </div>
      <div
        className="mobile-menu"
        onClick={() => {
          setMobileMenu(!mobileMenu);
        }}
      >
        {mobileMenu ? (
          <IoMdClose size={24} color="#fff" />
        ) : (
          <CgMenuRight size={24} color="#fff" />
        )}
      </div>
      <div className={`navigation ${mobileMenu ? "active" : ""}`}>
        <span
          className="navigation-item"
          onClick={() => {
            menuItemClickHandler("skills");
          }}
        >
          Skills
        </span>
        <span
          className="navigation-item"
          onClick={() => {
            menuItemClickHandler("projects");
          }}
        >
          Projects
        </span>
        <span
          className="navigation-item"
          onClick={() => {
            menuItemClickHandler("education");
          }}
        >
          Education
        </span>
        <CallToAction
          text="contact me"
          action={() => {
            menuItemClickHandler("footer");
          }}
        />
      </div>
    </div>
  );
};
export default Navigation;
