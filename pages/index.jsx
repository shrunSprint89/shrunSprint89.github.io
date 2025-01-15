import Link from "next/link";
import Illustration from "../components/Illustration";
import styles from "../styles/HomePage.module.css";
import useTranslation from "next-translate/useTranslation";

export default function HomePage() {
  const { t } = useTranslation("common");
  const myNameLabel = t("my-name");
  const {
    bioLabel,
    viewWorkBtnLabel,
    contactMeBtnLabel,
    bgText1,
    bgText2,
    bgText3,
  } = t(
    "home:.",
    {},
    {
      returnObjects: true,
    }
  );

  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>{bgText1}</h1>
          <h2>{bgText2}</h2>
          <h3>{bgText3}</h3>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>{myNameLabel}</h1>
            <h6 className={styles.bio}>{bioLabel}</h6>
            <Link href="/projects">
              <button className={styles.button}>{viewWorkBtnLabel}</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>{contactMeBtnLabel}</button>
            </Link>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}
