import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const AchievementsSection: FC = ({ children }) => {
  const { white } = colors;
  const { ps, ts } = breakpoints;
  const [first, ...rest] = children as any[];

  return (
    <PageSection backgroundColor={white}>
      <Box sx={{ textAlign: "center" }}>{first}</Box>
      <Grid
        container
        spacing={6}
        sx={{
          mt: 3,
          flexDirection: "row",
          [ps]: { flexDirection: "column" },
          [ts]: { flexDirection: "row" },
        }}
      >
        {rest}
      </Grid>
    </PageSection>
  );
};
