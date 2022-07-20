import { FC } from "react";
import { Grid } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const DonateSection: FC = ({ children }) => {
  const { white } = colors;
  const [first, ...rest] = children as any[];

  return (
    <PageSection backgroundColor={white}>
      <Grid
        container
        justifyContent="space-around"
        spacing={3}
        sx={{
          flexDirection: "row",
        }}
      >
        <Grid item xs={6}>
          {first}
        </Grid>
        <Grid item xs={6}>
          {rest}
        </Grid>
      </Grid>
    </PageSection>
  );
};
