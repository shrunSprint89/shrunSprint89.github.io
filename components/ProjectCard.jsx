import Image from "next/image";
import styles from "../styles/ProjectCard.module.css";

const ProjectCard = ({ project, demoLabel, sourceCodeLabel }) => {
  console.log(JSON.stringify(project));
  return (
    <div className={styles.card}>
      {project.image && (
        <Image
          className={styles.image}
          src={project.image}
          width={300}
          height={250}
          style={{
            objectFit: "fill",
          }}
          alt={project.name}
        />
      )}
      <div className={styles.content}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.cta}>
          {project.source_code && (
            <a
              href={project.source_code}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              {sourceCodeLabel}
            </a>
          )}
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.underline}
          >
            {demoLabel}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
