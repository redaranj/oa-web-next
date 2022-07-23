import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const AchievementsSection: FC = ({ children }) => {
  const { white } = colors;
  const [first, ...rest] = children as any[];

  return (
    <PageSection backgroundColor={white}>
      <Box sx={{ textAlign: "center" }}>{first}</Box>
      <Grid container direction="row" spacing={6} sx={{ mt: 3 }}>
        {rest}
      </Grid>
    </PageSection>
  );
};
