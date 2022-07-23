import { FC } from "react";
import { Grid } from "@mui/material";
import { colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const ActivitiesSection: FC = ({ children }) => {
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
        <Grid item>{first}</Grid>
        <Grid
          item
          container
          columnSpacing={6}
          rowSpacing={6}
          alignItems="flex-end"
          sx={{
            flexDirection: "row",
            [ps]: { flexDirection: "column" },
            [tl]: { flexDirection: "row" },
            ".activityContainer:nth-of-type(odd)": {
              height: 400,
            },
            ".activityContainer:nth-of-type(even)": {
              height: 350,
            },
          }}
        >
          {rest}
        </Grid>
      </Grid>
    </PageSection>
  );
};
