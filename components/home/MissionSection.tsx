import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const MissionSection: FC = () => {
  const { lightGrey } = colors;
  const { h1, bodyLarge } = typography;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid container>
        <Grid item sx={{ width: "50%" }}></Grid>
        <Grid item container direction="column" sx={{ width: "50%" }}>
          <Grid item>
            <Box component="h1" sx={h1}>
              Mission statement
            </Box>
          </Grid>
          <Grid item>
            <Box component="p" sx={bodyLarge}>
              OpenArchive is dedicated to protecting media freedom: preserving,
              amplifying, and securely routing mobile media to
              community-maintained collections in accessible public and private
              archives, outside the corporate walled gardens currently
              dominating the online media ecosystem.
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </PageSection>
  );
};
