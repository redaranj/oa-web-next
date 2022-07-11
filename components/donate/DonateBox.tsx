import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import aboutHeader from "images/about-header.png";

export const DonateBox: FC = () => {
  const t = useTranslate();
  const { white, turquoise } = colors;
  const { h1 } = typography;

  return (
    <PageSection backgroundColor={turquoise} backgroundImage={aboutHeader}>
      <Grid
        container
        justifyContent="space-around"
        sx={{
          flexDirection: "column",
          minHeight: "35vh",
        }}
      >
        <Grid item></Grid>
      </Grid>
    </PageSection>
  );
};
