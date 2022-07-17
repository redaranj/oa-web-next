import { FC } from "react";
import { Grid } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const ContentSection: FC = ({ children }) => {
  const { white } = colors;

  return (
    <PageSection backgroundColor={white}>
      <Grid
        container
        justifyContent="space-around"
        sx={{
          flexDirection: "column",
        }}
      >
        <Grid item>{children}</Grid>
      </Grid>
    </PageSection>
  );
};
