import { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import { Layout } from "components/common/Layout";
import "styles/global.css";

const OpenArchiveWeb = ({ Component, pageProps }: AppProps) => (
  <>
    <CssBaseline />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default OpenArchiveWeb;
