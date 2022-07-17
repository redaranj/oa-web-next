import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const ContactSection: FC = ({ children }) => {
  const { white, turquoise } = colors;
  const { h1 } = typography;

  return (
    <PageSection backgroundColor={turquoise}>
      <Grid
        container
        justifyContent="space-between"
        sx={{
          flexDirection: "row",
        }}
      >
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          {children}
        </Grid>
      </Grid>
    </PageSection>
  );
};
