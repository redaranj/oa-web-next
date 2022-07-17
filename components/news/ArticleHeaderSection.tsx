import { FC } from "react";
import { Grid } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const ArticleHeaderSection: FC = ({ children }) => {
  const { lightGrey } = colors;

  return (
    <PageSection backgroundColor={lightGrey}>
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
