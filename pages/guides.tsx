import type { NextPage } from "next";
import Head from "next/head";
import { Stack } from "@mui/material";
import { Layout } from "components/common/Layout";
import { HeaderSection } from "components/guides/HeaderSection";
import { GuidesSection } from "components/guides/GuidesSection";
import { RoleSection } from "components/common/RoleSection";

const Guides: NextPage = () => (
  <Layout>
    <Head>
      <title>OpenArchive: Guides</title>
    </Head>
    <Stack>
      <HeaderSection />
      <GuidesSection />
      <RoleSection />
    </Stack>
  </Layout>
);

export default Guides;
