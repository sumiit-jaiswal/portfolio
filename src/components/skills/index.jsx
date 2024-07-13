import React from "react";
import Section from "../shared/section";
import TechIcons from "../../images/skills.png";
import CallToAction from "../shared/CallToAction";

import "./style.scss";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Resume from "../../images/doc/resume.pdf";

const Skills = () => {
  return (
    <Section background="dark" id="skills">
      <div className="skills-content-wrapper">
        <div className="left-col">
          <img src={TechIcons} alt="JS,React,HTML,CSS" />
        </div>
        <div className="right-col">
          <h2>Skills</h2>
          <p>
            I am proficient in C++ and JavaScript, and I have strong control
            over a variety of technologies including Data Structures,
            Algorithms, HTML, CSS, ReactJS, SASS, Bootstrap, and SQL.
            Additionally, I am familiar with Strapi, Postman, API integration,
            Object-Oriented Programming (OOP), Database Management Systems
            (DBMS), operating systems, and Python. These skills enable me to
            build dynamic, responsive, and efficient web applications, making me
            a versatile and capable front-end developer.
          </p>
          <CallToAction
            text="Download Resume"
            icon={<AiOutlineCloudDownload />}
            action={() => window.open(Resume)}
          />
        </div>
      </div>
    </Section>
  );
};

export default Skills;
