import type { NextPage } from "next";
import Head from "next/head";
import { Stack } from "@mui/material";
import { Layout } from "components/common/Layout";
import { HeaderSection } from "components/team/HeaderSection";
import { VisionSection } from "components/team/VisionSection";
import { TeamSection } from "components/team/TeamSection";
import { BoardSection } from "components/team/BoardSection";
import { AboutSection } from "components/team/AboutSection";
import { ParticipateSection } from "components/team/ParticipateSection";

const Team: NextPage = () => (
  <Layout>
    <Head>
      <title>OpenArchive: Team</title>
    </Head>
    <Stack>
      <HeaderSection />
      <VisionSection />
      <TeamSection />
      <BoardSection />
      <AboutSection />
      <ParticipateSection />
    </Stack>
  </Layout>
);

export default Team;
