import type { NextPage } from "next";
import Head from "next/head";
import { Grid } from "@mui/material";
import { Layout } from "components/common/Layout";
import { HeaderSection } from "components/team/HeaderSection";
import { VisionSection } from "components/team/VisionSection";
import { DirectorSection } from "components/team/DirectorSection";
import { TeamSection } from "components/team/TeamSection";
import { BoardSection } from "components/team/BoardSection";
import { AboutSection } from "components/team/AboutSection";
import { ParticipateSection } from "components/team/ParticipateSection";

const Team: NextPage = () => (
  <Layout>
    <Head>
      <title>OpenArchive: Team</title>
    </Head>
    <Grid container direction="column">
      <Grid item>
        <HeaderSection />
      </Grid>
      <Grid item>
        <VisionSection />
      </Grid>
      <Grid item>
        <DirectorSection />
      </Grid>
      <Grid item>
        <TeamSection />
      </Grid>
      <Grid item>
        <BoardSection />
      </Grid>
      <Grid item>
        <AboutSection />
      </Grid>
      <Grid item>
        <ParticipateSection />
      </Grid>
    </Grid>
  </Layout>
);

export default Team;
