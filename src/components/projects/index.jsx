import React from "react";

import "./style.scss";
import Section from "../shared/section";

const projectsData = [
  {
    id: 1,
    name: "Xinfluence",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis atque dolor ad suscipit labore voluptatibus. Odio maiores assumenda commodi non delectus rem ex natus velit vero, ratione repellat consequatur pariatur fugit quia alias, eos recusandae doloribus blanditiis nobis numquam libero consectetur. Necessitatibus cumque, assumenda tenetur maiores corrupti eaque nobis fuga.",
    media: {
      thumbnail: require("../../images/portfolio/thumb-1.jpg"),
    },
  },
  {
    id: 2,
    name: "Anna & Daniel",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis atque dolor ad suscipit labore voluptatibus. Odio maiores assumenda commodi non delectus rem ex natus velit vero, ratione repellat consequatur pariatur fugit quia alias, eos recusandae doloribus blanditiis nobis numquam libero consectetur. Necessitatibus cumque, assumenda tenetur maiores corrupti eaque nobis fuga.",
    media: {
      thumbnail: require("../../images/portfolio/thumb-2.png"),
    },
  },
  {
    id: 3,
    name: "Web Design Landing Page",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis atque dolor ad suscipit labore voluptatibus. Odio maiores assumenda commodi non delectus rem ex natus velit vero, ratione repellat consequatur pariatur fugit quia alias, eos recusandae doloribus blanditiis nobis numquam libero consectetur. Necessitatibus cumque, assumenda tenetur maiores corrupti eaque nobis fuga.",
    media: {
      thumbnail: require("../../images/portfolio/thumb-2.png"),
    },
  },
];

const Projects = () => {
  return (
    <Section id="projects" title="My Projects" background="light">
      <div className="projects-content-wrapper">
        <div className="projects-showcase">
          {projectsData.map((project) => {
            return (
              <div key={project.name} className="showcase-item">
                <div className="left-col">
                  <div className="meta-content">
                    <h3>{project.name}</h3>
                  </div>
                  <img src={project.media.thumbnail} alt="" />
                </div>
                <div className="right-col">
                  <h1 className="project-title">{project.name}</h1>
                  <p className="desc">{project.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
