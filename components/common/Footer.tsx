import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const Footer: FC = () => {
  const { lightGrey } = colors;
  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid container direction="row">
        <Grid item>One</Grid>
        <Grid item>Two</Grid>
        <Grid item>Three</Grid>
      </Grid>
    </PageSection>
  );
};
