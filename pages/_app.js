import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import "../styles/globals.css";
import "../styles/themes.css";
import useTranslation from "next-translate/useTranslation";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    }
  }, []);

  const { t, lang } = useTranslation("common");
  const myName = t("my-name");

  return (
    <Layout>
      <Head title={`${myName} | ${pageProps.title}`} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
