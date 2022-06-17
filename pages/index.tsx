import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "components/common/Layout";
import { Stack } from "@mui/material";
import { HeaderSection } from "components/home/HeaderSection";
import { MissionSection } from "components/home/MissionSection";
import { ImpactSection } from "components/home/ImpactSection";
import { ProjectsSection } from "components/home/ProjectsSection";
import { WhoSection } from "components/home/WhoSection";
import { TestimonialsSection } from "components/common/TestimonialsSection";
// import { RoleSection } from "components/common/RoleSection";

const Home: NextPage = () => (
  <Layout>
    <Head>
      <title>OpenArchive: Home</title>
    </Head>
    <Stack>
      <HeaderSection />
      <MissionSection />
      <ImpactSection />
      <ProjectsSection />
      <WhoSection />
      <TestimonialsSection />
      {/* <RoleSection /> */}
    </Stack>
  </Layout>
);

export default Home;
