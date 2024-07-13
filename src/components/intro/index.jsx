import React from "react";

import cloud from "../../images/cloud.png";
import cloudSoft from "../../images/cloud-soft.png";
import Navigation from "./nav-bar";
import IntroContent from "../intro/intro-content";

import "./style.scss";

const Intro = () => {
  return (
    <div className="Intro-section">
      <div className="vector-bg" id="parallax">
        <img src={cloud} alt="" className="cloud" />
        <img src={cloudSoft} alt="" className="cloud-soft" />
      </div>
      <div className="content">
        <Navigation />
        <IntroContent />
      </div>
    </div>
  );
};

export default Intro;
