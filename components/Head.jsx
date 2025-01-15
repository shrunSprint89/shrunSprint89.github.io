import Head from "next/head";

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Sharan Selvaraj is a versatile full stack engineer specializing in frontend engineering. My technical portfolio spans end-to-end application development, integrating modern frontend technologies with Java or Node based backend frameworks and exploring emerging AI technologies"
      />
      <meta
        name="keywords"
        content="sharan, sharan selvaraj, software engineer, web developer, portfolio, angular, mean stack, react, mern stack, nextjs, java, python, vscode-portfolio"
      />
      <meta property="og:title" content="Sharan Selvaraj's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building applications that stand out"
      />
      <meta property="og:image" content="" />
      <meta property="og:url" content="https://shrunsprint89.github.io" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Sharan Selvaraj",
};
