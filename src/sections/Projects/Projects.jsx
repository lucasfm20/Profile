import React from "react";
import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/react.svg";
import weatherIcon from "../../assets/weather.jpeg"
import typeFaster from "../../assets/typeFaster.jpeg"
import medical from "../../assets/medical.jpeg"
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
      <ProjectCard
        src={weatherIcon}
        link={"https://github.com/lucasfm20/weatherCondition"}
        h3="WeatherCondition"
        p={"Python"}
      ></ProjectCard>
        <ProjectCard
        src={typeFaster}
        link={"https://github.com/lucasfm20/TypeFaster"}
        h3="Type Faster"
        p={"Python"}
      ></ProjectCard>
      <ProjectCard
        src={medical}
        link={"https://github.com/lucasfm20/ProjDesingPatterns"}
        h3="Medical API"
        p={"Java"}
      ></ProjectCard>

      </div>
    </section>
  );
}

export default Projects;
