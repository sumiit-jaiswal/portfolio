import React, { Children } from "react";

import "./style.scss";

const Section = ({ children, id, className, title, background }) => {
  let sectionTitle = document.querySelector(".section-title");
  if (title === "") {
    sectionTitle.style.display = "none";
  }

  return (
    <div
      className={`section ${className ? className : ""} ${
        background === "dark" ? "dark" : "light"
      }`}
      id={id || ""}
    >
      <div className="content">
        <div className="section-title">
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Section;
