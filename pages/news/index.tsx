import type { NextPage } from "next";
import Head from "next/head";
import { Stack } from "@mui/material";
import { Layout } from "components/common/Layout";
import { HeaderSection } from "components/news/HeaderSection";
import { NewsSection } from "components/news/NewsSection";

const News: NextPage = () => (
  <Layout>
    <Head>
      <title>OpenArchive: About</title>
    </Head>
    <Stack>
      <HeaderSection />
      <NewsSection />
    </Stack>
  </Layout>
);

export default News;
