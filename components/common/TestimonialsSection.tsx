import { FC } from "react";
import { Grid } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const TestimonialsSection: FC = ({ children }) => {
  const { lightGrey } = colors;
  const [title, one, two] = children as any[];

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid container direction="column">
        <Grid item>{title}</Grid>
        <Grid item container direction="row" spacing={6}>
          <Grid item xs={6}>
            {one}
          </Grid>
          <Grid item xs={6}>
            {two}
          </Grid>
        </Grid>
      </Grid>
    </PageSection>
  );
};
