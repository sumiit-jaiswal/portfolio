import React from "react";

import "./style.scss";
import Section from "../shared/section";
import Arrow from "../shared/arrow";

const projectsData = [
  {
    id: 1,
    name: "Xinfluence",
    description:
      "In May 2023, I developed a comprehensive, responsive front-end website for Xinfluence, an influencer marketing company, leveraging advanced web development techniques to ensure a seamless user experience and optimal functionality. The project involved creating a dynamic and engaging interface using HTML5, CSS, and JavaScript, with features such as interactive content displays, contact and subscription forms, and service showcases. Key highlights include implementing responsive design for cross-device compatibility, optimizing performance through efficient coding practices, and ensuring cross-browser compatibility. The successful launch of the Xinfluence website enhanced the company's online presence and received positive feedback for its design and usability.",
    techno: "Technologies used: HTML5, CSS, JavaScript.",
    media: {
      thumbnail: require("../../images/portfolio/thumb-1.jpeg"),
    },
    link: "https://github.com/sumiit-jaiswal/xinfluence-website",
  },
  {
    id: 2,
    name: "LoopLove",
    description:
      "From September 2023 to November 2024, I engineered a full-fledged e-commerce platform called LoopLove from scratch, designing and implementing a responsive front-end, secure login system, integrated payment gateway, and robust back-end using Strapi. This project involved creating a dynamic and scalable solution that catered to various user needs, including user authentication, product management, and secure transactions. Key achievements include leveraging a diverse tech stack to ensure a seamless user experience, optimizing performance for various devices, and ensuring data security throughout the platform.",
    techno:
      "Technologies used: React JS, SASS, JavaScript, Auth0, HTML5, Strapi, SQL.",
    media: {
      thumbnail: require("../../images/portfolio/thumb-2.png"),
    },
    link: "https://github.com/sumiit-jaiswal/looplove-web",
  },
  {
    id: 3,
    name: "ATG Website",
    description:
      "In July 2023, I developed a fully responsive company homepage with a login page, using HTML, CSS, JavaScript, and Bootstrap. This project focused on creating an intuitive and engaging user interface, ensuring accessibility across various devices. Key features include a dynamic homepage with interactive elements, a secure login system, and a mobile-friendly design. I utilized Bootstrap to streamline the development process and ensure consistent styling, while custom JavaScript enhanced the site's interactivity. The project successfully delivered a professional and user-friendly online presence for the company.",
    techno: "Technologies used: HTML, CSS, JavaScript, Bootstrap.",
    media: {
      thumbnail: require("../../images/portfolio/thumb-3.png"),
    },
    link: "https://atg-sumit.netlify.app",
  },
];
const clickHandler = (link) => {
  window.open(link, "_blank");
};

const Projects = () => {
  return (
    <Section id="projects" title="My Projects" background="light">
      <div className="projects-content-wrapper">
        <div className="projects-showcase">
          {projectsData.map((project) => {
            return (
              <div key={project.id} className="showcase-item">
                <div
                  className="left-col"
                  onClick={() => {
                    clickHandler(project.link);
                  }}
                >
                  <div className="meta-content">
                    <h3>{project.name}</h3>
                    <div className="go-to-cta">
                      <span className="text">go to project</span>
                      <Arrow />
                    </div>
                  </div>
                  <img src={project.media.thumbnail} alt="" />
                </div>
                <div className="right-col">
                  <h1
                    className="project-title"
                    onClick={() => {
                      clickHandler(project.link);
                    }}
                  >
                    {project.name}
                  </h1>
                  <p className="desc">{project.description}</p>
                  <p className="techno">{project.techno}</p>
                </div>
                <br></br>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
