import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { HorizontalCarousel } from "components/common/HorizontalCarousel";

export const AdditionalFeaturesSection: FC = ({ children }) => {
  const { lightGrey } = colors;
  const [first, ...rest] = children as any[];

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid
        container
        sx={{
          flexDirection: "column",
        }}
      >
        <Grid item>
          <Box sx={{ mb: "120px" }}>{first}</Box>
        </Grid>
        <Grid item sx={{ width: "100%" }}>
          <HorizontalCarousel columnOnMobile visibleCount={2.5}>
            {rest}
          </HorizontalCarousel>
        </Grid>
      </Grid>
    </PageSection>
  );
};
