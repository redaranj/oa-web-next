import { FC } from "react";
import { Grid } from "@mui/material";
import { colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const DonateSection: FC = ({ children }) => {
  const { white } = colors;
  const [first, ...rest] = children as any[];
  const { ps, pl, ts, tl, ds, dl } = breakpoints;

  return (
    <PageSection
      backgroundColor={white}
      sx={{
        py: 13,
        px: 11.25,
        pt: 2,
        [ps]: {
          py: 6,
          px: 3,
          pt: 0,
        },
        [pl]: {
          py: 6,
          px: 3,
          pt: 1,
        },
        [ts]: {
          py: 7,
          px: 4.375,
          pt: 1,
        },
        [tl]: {
          py: 9,
          px: 4.375,
          pt: 2,
        },
        [ds]: {
          py: 13,
          px: 6.25,
          pt: 2,
        },
        [dl]: {
          py: 13,
          px: 11.25,
          pt: 0,
        },
      }}
    >
      <Grid
        container
        justifyContent="space-around"
        spacing={6}
        sx={{
          flexDirection: "row",
          [ps]: { flexDirection: "column" },
          [ts]: { flexDirection: "row" },
        }}
      >
        <Grid
          item
          sx={{
            width: "50%",
            [ps]: { width: "100%" },
            [ts]: { width: "50%" },
          }}
        >
          {first}
        </Grid>
        <Grid
          item
          sx={{
            width: "50%",
            [ps]: { width: "100%" },
            [ts]: { width: "50%" },
          }}
        >
          {rest}
        </Grid>
      </Grid>
    </PageSection>
  );
};
