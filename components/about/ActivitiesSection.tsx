import { FC, PropsWithChildren } from "react";
import { Grid } from "@mui/material";
import { colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const ActivitiesSection: FC<PropsWithChildren> = ({ children }) => {
  const { lightGrey } = colors;
  const { ps, tl } = breakpoints;
  const [first, ...rest] = children as any[];
  return (
    <PageSection backgroundColor={lightGrey} sx={{ pb: "16px !important" }}>
      <Grid container spacing={3} direction="column">
        <Grid item>{first}</Grid>
        <Grid
          item
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
      </Grid>
    </PageSection>
  );
};
