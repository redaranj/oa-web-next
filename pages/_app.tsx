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

const OpenArchiveWeb = ({ Component, pageProps }: AppProps) => (
  <CacheProvider value={cache}>
    <Head>
      <link rel="icon" type="image/png" href={Favicon.src} />
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
