import React from "react";
import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/react.svg";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
      <ProjectCard
        src={viberr}
        link={"https://github.com/lucasfm20/weatherCondition"}
        h3="Vibeer"
        p={"WeatherCondition"}
      ></ProjectCard>
        <ProjectCard
        src={viberr}
        link={"https://github.com/lucasfm20/weatherCondition"}
        h3="Vibeer"
        p={"WeatherCondition"}
      ></ProjectCard>
      <ProjectCard
        src={viberr}
        link={"https://github.com/lucasfm20/weatherCondition"}
        h3="Vibeer"
        p={"WeatherCondition"}
      ></ProjectCard>

      </div>
    </section>
  );
}

export default Projects;
