import ArticleCard from "../components/ArticleCard";
import styles from "../styles/ArticlesPage.module.css";

const ArticlesPage = ({ articles }) => {
  return (
    <>
      <h3>
        Recent Posts from{" "}
        <a
          href="https://dev.to/soberdiscerner"
          target="_blank"
          rel="noopener"
          className={styles.underline}
        >
          dev.to
        </a>
      </h3>
      {articles && articles.length > 0 && (
        <div className={styles.container}>
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    "https://dev.to/api/articles/me/published?per_page=6",
    {
      headers: {
        "api-key": process.env.DEV_TO_API_KEY,
      },
    }
  );

  const data = await res.json();

  return {
    props: { title: "Articles", articles: data },
  };
}

export default ArticlesPage;
