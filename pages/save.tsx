import type { NextPage } from "next";
import Head from "next/head";
import { Grid } from "@mui/material";
import { Layout } from "components/common/Layout";
import { HeaderSection } from "components/save/HeaderSection";
import { AcronymSection } from "components/save/AcronymSection";
import { TestimonialsSection } from "components/common/TestimonialsSection";
import { CoreFeaturesSection } from "components/save/CoreFeaturesSection";
import { AdditionalFeaturesSection } from "components/save/AdditionalFeaturesSection";
import { MoreSection } from "components/save/MoreSection";
import { GettingStartedSection } from "components/save/GettingStartedSection";
import { RoleSection } from "components/common/RoleSection";

const Save: NextPage = () => (
  <Layout>
    <Head>
      <title>OpenArchive: Save</title>
    </Head>
    <Grid container direction="column">
      <HeaderSection />
      <AcronymSection />
      <TestimonialsSection />
      <CoreFeaturesSection />
      <AdditionalFeaturesSection />
      <MoreSection />
      <GettingStartedSection />
      <RoleSection />
    </Grid>
  </Layout>
);

export default Save;