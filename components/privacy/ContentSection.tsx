import { FC } from "react";
import { Grid } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import aboutHeader from "images/about-header.png";

export const ContentSection: FC = ({ children }) => {
  const { turquoise } = colors;

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
        {children}
      </Grid>
    </PageSection>
  );
};
