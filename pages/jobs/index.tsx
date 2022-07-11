import type { NextPage } from "next";
import Head from "next/head";
import { Stack } from "@mui/material";
import { Layout } from "components/common/Layout";
import { JobsSection } from "components/jobs/JobsSection";

const Jobs: NextPage = () => (
  <Layout>
    <Head>
      <title>OpenArchive: FAQ</title>
    </Head>
    <Stack>
      <JobsSection />
    </Stack>
  </Layout>
);

export default Jobs;
