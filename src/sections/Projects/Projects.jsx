import React from "react";
import styles from "./ProjectsStyles.module.css";
import weatherIcon from "../../assets/weather.jpeg"
import typeFaster from "../../assets/typeFaster.jpeg"
import medical from "../../assets/medical.jpeg"
import toDoLIst from "../../assets/toDoList.jpeg"
import stock from "../../assets/stock.jpeg"
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
      <ProjectCard
        src={toDoLIst}
        link={"https://github.com/lucasfm20/ToDoList-Python"}
        h3="To do List"
        p={"Python"}
      ></ProjectCard>
      <ProjectCard
        src={stock}
        link={"https://github.com/lucasfm20/automacaoAcao"}
        h3="Stock market automation"
        p={"Python"}
      ></ProjectCard>

      </div>
    </section>
  );
}

export default Projects;
