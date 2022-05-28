import type { NextPage } from "next";
import Head from "next/head";
import { Grid } from "@mui/material";
import { Layout } from "components/common/Layout";
import { HeaderSection } from "components/about/HeaderSection";
import { BeliefsSection } from "components/about/BeliefsSection";
import { ActivitiesSection } from "components/about/ActivitiesSection";
import { PartnersSection } from "components/about/PartnersSection";
import { RoleSection } from "components/common/RoleSection";

const About: NextPage = () => (
  <Layout>
    <Head>
      <title>OpenArchive: About</title>
    </Head>
    <Grid container direction="column">
      <Grid item>
        <HeaderSection />
      </Grid>
      <Grid item>
        <BeliefsSection />
      </Grid>
      <Grid item>
        <RoleSection />
      </Grid>
      <Grid item>
        <ActivitiesSection />
      </Grid>
      <Grid item>
        <PartnersSection />
      </Grid>
    </Grid>
  </Layout>
);

export default About;
