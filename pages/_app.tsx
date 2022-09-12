import { AppProps } from "next/app";
import Head from "next/head";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { MDXProvider } from "@mdx-js/react";
import { Layout } from "components/common/Layout";
import { components } from "styles/theme";
import { I18n } from "react-polyglot";
import Favicon from "public/images/favicon.ico";
import en from "../locales/en.json";
import "styles/global.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";

const locale = "en";
const messages = { en };

const cache = createCache({ key: "next" });

const OpenArchiveWeb = (props: AppProps) => {
  const { Component, pageProps } = props;
  const pageInfo: any = {};

  return (
    <CacheProvider value={cache}>
      <Head>
        <link rel="icon" type="image/png" href={Favicon.src} />

        <meta name="twitter:site" content="@open_archive" />
        <meta name="twitter:title" content="page.title" />
        {pageInfo.description ? (
          <meta name="twitter:description" content="page.description" />
        ) : (
          <meta name="twitter:description" content="site.description" />
        )}
        {pageInfo.image ? (
          <>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content="site.url page.image" />
          </>
        ) : (
          <>
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:image" content="site.title_image" />
          </>
        )}

        <meta property="og:title" content="page.title" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="site.url page.permalink" />
        {pageInfo.description ? (
          <meta name="og:description" content="page.description" />
        ) : (
          <meta name="og:description" content="site.description" />
        )}
        {pageInfo.image ? (
          <meta property="og:image" content="site.url page.image" />
        ) : (
          <meta property="og:image" content="site.title_image" />
        )}
      </Head>
      <CssBaseline />
      <I18n locale={locale} messages={messages[locale]}>
        <MDXProvider
          components={{
            wrapper: Layout,
            ...components,
          }}
        >
          <Component {...pageProps} />
        </MDXProvider>
      </I18n>
    </CacheProvider>
  );
};

export default OpenArchiveWeb;
