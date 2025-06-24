import styles from "./SkillsStyles.module.css";
import SkillList from "../../common/SkillList";
import checkMark from "../../assets/react.svg";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMark} skill="HTML"></SkillList>
        <SkillList src={checkMark} skill="CSS"></SkillList>
        <SkillList src={checkMark} skill="React"></SkillList>
        <SkillList src={checkMark} skill="Python"></SkillList>
        <SkillList src={checkMark} skill="Java"></SkillList>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMark} skill="Postgresql"></SkillList>
        <SkillList src={checkMark} skill="Groovy"></SkillList>
        <SkillList src={checkMark} skill="Git"></SkillList>
        <SkillList src={checkMark} skill="Spring"></SkillList>
        <SkillList src={checkMark} skill="API "></SkillList>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMark} skill="Unit Tests"></SkillList>
        <SkillList src={checkMark} skill="Databricks"></SkillList>
        <SkillList src={checkMark} skill="JavaScript"></SkillList>
        <SkillList src={checkMark} skill="Mongodb"></SkillList>
        <SkillList src={checkMark} skill="Docker"></SkillList>
      </div>
    </section>
  );
}

export default Skills;
