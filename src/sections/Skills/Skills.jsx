import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from '../../assets/checkmark-light.svg';

import SkillList from "../../common/SkillList";
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <h2>Expertise</h2>
      <br />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML"/>
        <SkillList src={checkMarkIcon} skill="CSS"/>
        <SkillList src={checkMarkIcon} skill="JavaScript"/>
        <SkillList src={checkMarkIcon} skill="React"/>
        <SkillList src={checkMarkIcon} skill="Python"/>
      </div>
      <hr />
      <h2>Familiar</h2>
      <br />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Node.js"/>
        <SkillList src={checkMarkIcon} skill="Express.js"/>
        <SkillList src={checkMarkIcon} skill="MongoDB"/>
        <SkillList src={checkMarkIcon} skill="Java"/>
      </div>
      <hr />
      <h2>Comfortable</h2>
      <br />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="MySQL"/>
        <SkillList src={checkMarkIcon} skill="C"/>
        <SkillList src={checkMarkIcon} skill="jQuery"/>
        <SkillList src={checkMarkIcon} skill="PHP"/>
        <SkillList src={checkMarkIcon} skill="Redux"/>
        <SkillList src={checkMarkIcon} skill="Bootstrap"/>
        <SkillList src={checkMarkIcon} skill="Wordpress"/>
      </div>
      {/* <hr /> */}
    </section>
  );
};

export default Skills;
