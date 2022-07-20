import { FC } from "react";
import { Grid } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const ImpactSection: FC = ({ children }) => {
  const { white } = colors;
  const [first, ...rest] = children as any[];

  return (
    <PageSection backgroundColor={white}>
      <Grid container direction="column">
        <Grid item>{first}</Grid>
        <Grid item container direction="row" spacing={6} sx={{ pt: 1 }}>
          {rest}
        </Grid>
      </Grid>
    </PageSection>
  );
};
