import { FC } from "react";
import { Grid } from "@mui/material";
import { colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const DonateSection: FC = ({ children }) => {
  const { white } = colors;
  const [first, ...rest] = children as any[];
  const { ps, ts } = breakpoints;

  return (
    <PageSection backgroundColor={white}>
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
