import React from "react";

import Intro from "./components/intro";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Education from "./components/education"
import Footer from "./components/footer";

import "./app.scss";

const App = () => {
    return (
        <div>
            <Intro />
            <Skills />
            <Projects />
            <Education />
            <Footer />
        </div>
    );
};

export default App;
