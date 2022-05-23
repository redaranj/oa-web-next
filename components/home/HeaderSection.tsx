import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { typography, colors, breakpoints as bp } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const HeaderSection: FC = () => {
  const { white } = colors;
  const { h1, bodyLarge } = typography;

  return (
    <PageSection backgroundColor={white}>
      <Grid
        container
        sx={{
          flexDirection: "row",
          [bp.desktopLarge]: { flexDirection: "column" },
        }}
      >
        <Grid container direction="column" item sx={{ width: "50%" }}>
          <Grid item>
            <Box component="h1" sx={h1}>
              We help preserve truth to power
            </Box>
          </Grid>
          <Grid item>
            <Box component="p" sx={bodyLarge}>
              The tools OpenArchive builds help citizen reporters and
              eyewitnesses across the world preserve, protect, and amplify what
              they’ve documented on their phones
            </Box>
          </Grid>
          <Grid item>Button</Grid>
        </Grid>
        <Grid item sx={{ width: "50%" }}>
          Photos
        </Grid>
      </Grid>
    </PageSection>
  );
};
