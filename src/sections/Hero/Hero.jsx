import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";

function Hero() {
  return (
    <section id="hero">
      {/* styles.className is being used to keep styles modular */}
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Picture of Mahajabin Tokon"
        />
      </div>
    </section>
  );
}

export default Hero;
