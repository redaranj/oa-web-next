import { FC } from "react";
import { Grid } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const BoardSection: FC = ({ children }) => {
  const { white } = colors;
  const [first, ...rest] = children as any[];

  return (
    <PageSection backgroundColor={white}>
      <Grid container direction="column" rowSpacing={8}>
        <Grid item>{first}</Grid>
        {rest}
      </Grid>
    </PageSection>
  );
};
