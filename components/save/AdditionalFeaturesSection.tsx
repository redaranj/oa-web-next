import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const AdditionalFeaturesSection: FC = ({ children }) => {
  const { lightGrey } = colors;
  const { ps, tl } = breakpoints;
  const [first, ...rest] = children as any[];

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid
        container
        sx={{
          flexDirection: "column",
        }}
      >
        <Grid item>
          <Box sx={{ mb: "120px" }}>{first}</Box>
        </Grid>
        <Grid
          item
          container
          direction="row"
          spacing={8}
          sx={{
            flexDirection: "row",
            [ps]: { flexDirection: "column" },
            [tl]: { flexDirection: "row" },
          }}
        >
          {rest}
        </Grid>
      </Grid>
    </PageSection>
  );
};
