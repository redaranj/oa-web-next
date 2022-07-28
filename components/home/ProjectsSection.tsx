import { FC } from "react";
import { Grid, Box } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const ProjectsSection: FC = ({ children }) => {
  const { lightGrey } = colors;
  const [first, ...rest] = children as any[];

  return (
    <PageSection backgroundColor={lightGrey}>
      <Box>{first}</Box>
      <Grid container direction="row" spacing={6}>
        {rest}
      </Grid>
    </PageSection>
  );
};
