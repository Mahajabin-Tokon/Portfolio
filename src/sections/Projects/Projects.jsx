import styles from "./ProjectsStyles.module.css";
import viber from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png"
import hipsster from "../../assets/hipsster.png"
import fitLift from "../../assets/fitlift.png"
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viber}
          link="https://mahajabins-todolist.netlify.app/"
          h3="Retro Todos"
          p="Todo List App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://mahajabins-todolist.netlify.app/"
          h3="Title"
          p="Lorem ipsum"
        />
        <ProjectCard
          src={hipsster}
          link="https://mahajabins-todolist.netlify.app/"
          h3="Title"
          p="Lorem ipsum"
        />
        <ProjectCard
          src={fitLift}
          link="https://mahajabins-todolist.netlify.app/"
          h3="Title"
          p="Lorem ipsum"
        />
      </div>
    </section>
  );
}

export default Projects;
