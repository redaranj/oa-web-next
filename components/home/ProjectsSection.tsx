import { FC, PropsWithChildren } from "react";
import { Grid, Box } from "@mui/material";
import { colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const ProjectsSection: FC<PropsWithChildren> = ({ children }) => {
  const { lightGrey } = colors;
  const [first, ...rest] = children as any[];
  const { ps, tl } = breakpoints;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Box>{first}</Box>
      <Grid
        container
        spacing={3}
        sx={{
          flexDirection: "row",
          [ps]: {
            flexDirection: "column",
          },
          [tl]: { flexDirection: "row" },
        }}
      >
        {rest}
      </Grid>
    </PageSection>
  );
};
