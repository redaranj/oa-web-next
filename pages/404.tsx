import type { NextPage } from "next";
import Head from "next/head";
import { Stack } from "@mui/material";
import { Layout } from "components/common/Layout";
import { NotFoundSection } from "components/common/NotFoundSection";

const NotFound: NextPage = () => (
  <Layout>
    <Head>
      <title>OpenArchive: Not Found</title>
    </Head>
    <Stack>
      <NotFoundSection />
    </Stack>
  </Layout>
);

export default NotFound;
