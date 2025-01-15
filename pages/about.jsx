import useTranslation from "next-translate/useTranslation";
import SkillsChart from "../components/SkillsChart";
import styles from "../styles/ProjectsPage.module.css";
const AboutPage = () => {
  const { t } = useTranslation();
  const {
    title,
    shortBioLabel,
    description,
    skillsLabel,
    certificationsLabel,
    certificationLinkLabel,
  } = t(
    "about:.",
    {},
    {
      returnObjects: true,
    }
  );
  return (
    <>
      <h3>{title}</h3>

      <div className={styles.container}>
        <h4>{shortBioLabel}</h4>
        <p>{description}</p>
      </div>

      <h3>{skillsLabel}</h3>
      <div className={styles.container}>
        <SkillsChart />
      </div>

      <h3>{certificationsLabel}</h3>
      <div className={styles.container}>
        <p>
          <a
            href="https://www.linkedin.com/in/sharanselvaraj/details/certifications/"
            target="_blank"
          >
            {certificationLinkLabel}
          </a>
        </p>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
