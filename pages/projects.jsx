import ProjectCard from "../components/ProjectCard";
import styles from "../styles/ProjectsPage.module.css";
import useTranslation from "next-translate/useTranslation";
import projectsJson from "../data/projects.json";

const ProjectsPage = () => {
  const { t } = useTranslation();
  const { descriptionLabel, demoLabel, sourceCodeLabel, listOfProjects } = t(
    "projects:.",
    {},
    {
      returnObjects: true,
    }
  );
  const projects = projectsJson.map((project, i) => ({
    ...project,
    ...listOfProjects[i],
  }));
  return (
    <>
      <h3>{descriptionLabel}</h3>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            demoLabel={demoLabel}
            sourceCodeLabel={sourceCodeLabel}
          />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Projects" },
  };
}

export default ProjectsPage;
