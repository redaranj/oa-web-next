import type { NextPage } from "next";
import Head from "next/head";
import { Stack } from "@mui/material";
import { Layout } from "components/common/Layout";
import { HeaderSection } from "components/donate/HeaderSection";
import { DonateSection } from "components/donate/DonateSection";

const Donate: NextPage = () => (
  <Layout>
    <Head>
      <title>OpenArchive: Donate</title>
    </Head>
    <Stack>
      <HeaderSection />
      <DonateSection />
    </Stack>
  </Layout>
);

export default Donate;
