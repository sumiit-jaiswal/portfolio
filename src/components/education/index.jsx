import React from "react";

import "./style.scss";
import Section from "../shared/section";
import school from "../../images/education/school.jpg";
import college from "../../images/education/college.jpg";
import EducationCard from "./education-card";

const Education = () => {
  return (
    <Section id="education" title="Education / Achivements" backgrond="dark">
      <div className="education-content-wrapper">
        <EducationCard
          user="Sarvodya Vidyalaya"
          date="2020"
          image={school}
          title="XII"
          description="Completed 12th grade in Science with 92% from Sarvodaya Vidyalaya, Delhi, and successfully cleared JEE Mains, showcasing a strong foundation in scientific principles and academic achievement."
        />
        <EducationCard
          user="Delhi Technological University"
          date="Current"
          image={college}
          title="B.tech"
          description="I am currently in my fourth year pursuing a Bachelor of Technology (B.Tech) in Automotive Engineering at Delhi Technological University (DTU), Delhi, where I am also pursuing a minor degree in Computer Science."
        />
        <EducationCard
          user="Runner up"
          date="2019"
          image={college}
          title="Science Quiz Competition"
          description="In 2019, I achieved the runner-up position in the prestigious Delhi Science Quiz competition, showcasing my passion for scientific inquiry and problem-solving."
        />
      </div>
    </Section>
  );
};

export default Education;
