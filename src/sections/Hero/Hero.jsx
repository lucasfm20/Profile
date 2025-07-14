import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/react.svg";
import instagram from '../../assets/instagramBlue.png'
import profile from "../../assets/desenho.png";
import github from "../../assets/github-blue.png";
import linkedin from "../../assets/linkedinBlue.png";
import bulb from "../../assets/sun.png"
import pdf from "../../assets/curriculoFinal.pdf"
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const {theme,toggleTheme} = useTheme();

 
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={profile} alt="image"></img>
        <img className={styles.colorMode} src={bulb} alt="Color mode incon" onClick={toggleTheme}></img>
      </div>
      <div className={styles.info}>
        <h1>Lucas Martins</h1>
        <h2> Software engineer</h2>
        <span>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={instagram} alt="Instagram"></img>
          </a>
          <a href="https://www.linkedin.com/in/lucas-fortunato-martins-b37023267/" target="_blank">
            <img src={linkedin} alt="Linkedin"></img>
          </a>
          <a href="https://www.github.com/lucasfm20" target="_blank">
            <img src={github} alt="Github"></img>
          </a>
        </span>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          impedit magni dolorum iste vero ipsam ullam eos architecto veritatis
          dicta et neque assumenda expedita, dolores asperiores! Sapiente
          ducimus repellendus alias.
        </p>
        <a href={pdf} download>
          <button className="hover" >
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
