import { FC } from "react";
import { Grid } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const ContactSection: FC = ({ children }) => {
  const { turquoise } = colors;

  return (
    <PageSection backgroundColor={turquoise}>
      <Grid
        container
        justifyContent="space-between"
        sx={{
          flexDirection: "row",
        }}
      >
        <Grid item xs={6}>
          {" "}
        </Grid>
        <Grid item xs={6}>
          {children}
        </Grid>
      </Grid>
    </PageSection>
  );
};
