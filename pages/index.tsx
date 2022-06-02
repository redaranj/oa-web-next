import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "components/common/Layout";
import { Grid } from "@mui/material";
import { HeaderSection } from "components/home/HeaderSection";
import { MissionSection } from "components/home/MissionSection";
import { ImpactSection } from "components/home/ImpactSection";
import { ProjectsSection } from "components/home/ProjectsSection";
import { WhoSection } from "components/home/WhoSection";
import { TestimonialsSection } from "components/common/TestimonialsSection";
import { RoleSection } from "components/common/RoleSection";

const Home: NextPage = () => (
  <Layout>
    <Head>
      <title>OpenArchive: Home</title>
    </Head>
    <Grid container direction="column">
      <HeaderSection />
      <MissionSection />
      <ImpactSection />
      <ProjectsSection />
      <WhoSection />
      <TestimonialsSection />
      <RoleSection />
    </Grid>
  </Layout>
);

export default Home;
