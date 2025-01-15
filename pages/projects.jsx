import ProjectCard from "../components/ProjectCard";
import { getProjects } from "./api/projects";
import styles from "../styles/ProjectsPage.module.css";
import useTranslation from "next-translate/useTranslation";

const ProjectsPage = ({ projects }) => {
  const { t } = useTranslation();
  const { descriptionLabel, demoLabel, sourceCodeLabel, listOfProjects } = t(
    "projects:.",
    {},
    {
      returnObjects: true,
    }
  );
  projects = projects.map((project, i) => ({
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
  const projects = getProjects();

  return {
    props: { title: "Projects", projects },
  };
}

export default ProjectsPage;
