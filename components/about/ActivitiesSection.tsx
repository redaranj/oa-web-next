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
          justifyContent="center"
          alignItems="center"
          alignContent="center"
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
