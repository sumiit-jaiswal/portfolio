import React from "react";

import "./style.scss";
import rocket from "../../../images/rocket.png";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";

const IntroContent = () => {
  return (
    <div className="intro-content">
      <div className="layout">
        <div className="left-col">
          <h1 className="title">
            <span className="small-text">
              <span className="text">Hello</span>
              {/* <span className="icon">
                <img src={hand} />
              </span> */}
              <span className="text">, I am</span>
            </span>
            <span className="big-text"> Sumit Jaiswal</span>
          </h1>
          <p>
            Hey there! I'm a 4th-year student at Delhi Technological University
            and a passionate front-end web developer, software engineer. Scroll
            down to know more about me and my work.
          </p>
          <CallToAction
            text="Contact me"
            action={() => {
              scrollToSection("footer");
            }}
          />
        </div>
        <div className="right-col">
          <img src={rocket} alt="Sumit Jaiswal" />
        </div>
      </div>
    </div>
  );
};

export default IntroContent;
