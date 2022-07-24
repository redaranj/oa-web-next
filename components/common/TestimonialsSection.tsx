import { FC } from "react";
import { Grid } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { HorizontalCarousel } from "components/common/HorizontalCarousel";

export const TestimonialsSection: FC = ({ children }) => {
  const { lightGrey } = colors;
  const [first, ...rest] = children as any[];

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid container direction="column">
        <Grid item>{first}</Grid>
        <Grid item>
          <HorizontalCarousel>{rest}</HorizontalCarousel>
        </Grid>
      </Grid>
    </PageSection>
  );
};
