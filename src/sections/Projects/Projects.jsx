import styles from "./ProjectsStyles.module.css";
import viber from "../../assets/viberr.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <a href="https://mahajabins-todolist.netlify.app/" target="_blank">
          <img className="hover" src={viber} alt="Viber logo" />
          <h3>Retro Todos</h3>
          <p>Todo List App</p>
        </a>
      </div>
    </section>
  );
}

export default Projects;
