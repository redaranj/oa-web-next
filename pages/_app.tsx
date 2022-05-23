import { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import "styles/global.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";

const OpenArchiveWeb = ({ Component, pageProps }: AppProps) => (
  <>
    <CssBaseline />
    <Component {...pageProps} />
  </>
);

export default OpenArchiveWeb;
