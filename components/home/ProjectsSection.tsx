import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { ProjectItem } from "components/home/ProjectItem";

export const ProjectsSection: FC = () => {
  const { lightGrey } = colors;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid container direction="column">
        <Grid item>Our projects</Grid>
        <Grid item container direction="row">
          <ProjectItem title={"Save"} image={null} url={""} />
          <ProjectItem title={"Guide"} image={null} url={""} />
          <ProjectItem title={"Research"} image={null} url={""} />
        </Grid>
      </Grid>
    </PageSection>
  );
};
