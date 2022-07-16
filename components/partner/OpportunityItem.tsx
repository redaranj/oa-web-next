import { FC } from "react";
import { Grid } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const OpportunityItem: FC = ({ children }) => {
  const { white } = colors;
  const [first, ...rest] = children as any[];
  console.log({ neat: "neat", children: first.props.children });

  return (
    <PageSection backgroundColor={white}>
      <Grid
        container
        justifyContent="space-around"
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
