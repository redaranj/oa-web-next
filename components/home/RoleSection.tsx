import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const RoleSection: FC = () => {
  const { white } = colors;

  return (
    <PageSection backgroundColor={white}>
      <Grid container direction="column">
        <Grid item sx={{ textAlign: "center" }}>
          <Box>You have a role to play</Box>
          <Box>
            Together, we can build a world where everyone has the safety they
            deserve. Join us.
          </Box>
        </Grid>
        <Grid item container direction="row">
          <Grid item container direction="column" sx={{ width: "50%" }}>
            <Grid item>Have questions?</Grid>
            <Grid item>Get involved</Grid>
          </Grid>
          <Grid item sx={{ width: "50%" }}>
            Want to participate?
          </Grid>
        </Grid>
      </Grid>
    </PageSection>
  );
};
