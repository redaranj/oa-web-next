import { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import { I18n } from "react-polyglot";
import en from "../locales/en.json";
import "styles/global.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";

const locale = "en";
const messages = { en };

const OpenArchiveWeb = ({ Component, pageProps }: AppProps) => (
  <>
    <CssBaseline />
    <I18n locale={locale} messages={messages[locale]}>
      <Component {...pageProps} />
    </I18n>
  </>
);

export default OpenArchiveWeb;
