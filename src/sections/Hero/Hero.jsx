import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import resume from "../../assets/resume.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section className={styles.container} id="hero">
      {/* styles.className is being used to keep styles modular */}
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Picture of Mahajabin Tokon"
        />
        {/* Only images in product page can be directly put as src */}
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Light/Dark Mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Mahajabin <br />
          Tokon
        </h1>
        <h2>Software Developer</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a href="https://github.com/Mahajabin-Tokon" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
          <a href="https://www.linkedin.com/in/mahajabintokon" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn Icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern React Web apps for commercial
          businesses.
        </p>
        <a href={resume} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
