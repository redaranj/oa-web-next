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
import archiving1 from "public/images/archiving-1.png";
import en from "../locales/en.json";
import "styles/global.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";

const locale = "en";
const messages = { en };

const cache = createCache({ key: "next" });
const siteDescription =
  "OpenArchive helps history's first responders safely store, verify, and share critical evidence.";
// Twitter & Facebook meta tags temporarily hard-coded

const OpenArchiveWeb = ({ Component, pageProps }: AppProps) => (
  <CacheProvider value={cache}>
    <Head>
      <link rel="icon" type="image/png" href={Favicon.src} />
      <meta name="twitter:site" content="@open_archive" />
      <meta name="twitter:title" content="OpenArchive" />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={archiving1.src} />

      <meta property="og:title" content="OpenArchive" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://open-archive.org" />
      <meta name="og:description" content={siteDescription} />
      <meta property="og:image" content={archiving1.src} />
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

export default OpenArchiveWeb;
