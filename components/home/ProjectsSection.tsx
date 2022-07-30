import { FC } from "react";
import { Grid, Box } from "@mui/material";
import { colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const ProjectsSection: FC = ({ children }) => {
  const { lightGrey } = colors;
  const [first, ...rest] = children as any[];
  const { ps, ts } = breakpoints;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Box>{first}</Box>
      <Grid
        container
        spacing={6}
        sx={{
          flexDirection: "row",
          [ps]: {
            flexDirection: "column",
          },
          [ts]: { flexDirection: "row" },
        }}
      >
        {rest}
      </Grid>
    </PageSection>
  );
};
