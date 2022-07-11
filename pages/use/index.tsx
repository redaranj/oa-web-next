import type { NextPage } from "next";
import Head from "next/head";
import { Stack } from "@mui/material";
import { Layout } from "components/common/Layout";
import { HeaderSection } from "components/use/HeaderSection";
import { UseCasesSection } from "components/use/UseCasesSection";

const Use: NextPage = () => (
  <Layout>
    <Head>
      <title>OpenArchive: Use Cases</title>
    </Head>
    <Stack>
      <HeaderSection />
      <UseCasesSection />
    </Stack>
  </Layout>
);

export default Use;
