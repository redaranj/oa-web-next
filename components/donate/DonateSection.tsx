import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { DonateBox } from "components/donate/DonateBox";

export const DonateSection: FC = () => {
  const t = useTranslate();
  const { white } = colors;

  return (
    <PageSection backgroundColor={white}>
      <Grid
        container
        justifyContent="space-around"
        sx={{
          flexDirection: "row",
        }}
      >
        <Grid item container direction="column">
          <Grid item>History's first responders</Grid>
          <Grid item>Other ways</Grid>
        </Grid>
        <Grid>
          <DonateBox />
        </Grid>
      </Grid>
    </PageSection>
  );
};
