import { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { I18n } from "react-polyglot";
import { theme } from "styles/theme";
import en from "../locales/en.json";
import "styles/global.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";

const locale = "en";
const messages = { en };

const OpenArchiveWeb = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <I18n locale={locale} messages={messages[locale]}>
      <Component {...pageProps} />
    </I18n>
  </ThemeProvider>
);

export default OpenArchiveWeb;
