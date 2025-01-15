import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import "../styles/globals.css";
import "../styles/themes.css";
import useTranslation from "next-translate/useTranslation";
import { i18nConfig } from "../i18n";
import I18nProvider from "next-translate/I18nProvider";
import common from "../locales/en/common.json";
import about from "../locales/en/about.json";
import articles from "../locales/en/articles.json";
import contact from "../locales/en/contact.json";
import github from "../locales/en/github.json";
import home from "../locales/en/home.json";
import projects from "../locales/en/projects.json";
import settings from "../locales/en/settings.json";

function MyApp({ Component, pageProps, router }) {
  const lang = i18nConfig.locales.includes(router.query.locale)
    ? router.query.locale
    : i18nConfig.defaultLocale;

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    }
  }, []);

  const { t } = useTranslation("common");
  const myName = t("my-name");

  return (
    <I18nProvider
      lang={lang}
      namespaces={{
        common,
        about,
        articles,
        contact,
        github,
        home,
        projects,
        settings,
      }}
    >
      <Layout>
        <Head title={`${myName} | ${pageProps.title}`} />
        <Component {...pageProps} />
      </Layout>
    </I18nProvider>
  );
}

export default MyApp;
