import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "components/common/Layout";
import { Grid } from "@mui/material";
import { HeaderSection } from "components/home/HeaderSection";
import { MissionSection } from "components/home/MissionSection";
import { ImpactSection } from "components/home/ImpactSection";
import { ProjectsSection } from "components/home/ProjectsSection";
import { WhoSection } from "components/home/WhoSection";
import { TestimonialsSection } from "components/home/TestimonialsSection";
import { RoleSection } from "components/home/RoleSection";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>OpenArchive</title>
      </Head>
      <Grid direction="column">
        <Grid item>
          <HeaderSection />
        </Grid>
        <Grid item>
          <MissionSection />
        </Grid>
        <Grid item>
          <ImpactSection />
        </Grid>
        <Grid item>
          <ProjectsSection />
        </Grid>
        <Grid item>
          <WhoSection />
        </Grid>
        <Grid item>
          <TestimonialsSection />
        </Grid>
        <Grid item>
          <RoleSection />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
