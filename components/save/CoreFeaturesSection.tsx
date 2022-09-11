import { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints, typography } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { HorizontalCarousel } from "components/common/HorizontalCarousel";

export const CoreFeaturesSection: FC<PropsWithChildren> = ({ children }) => {
  const { white } = colors;
  const { bodyLarge } = typography;
  const { ps, tl } = breakpoints;
  const [title, description, ...rest] = children as any[];

  return (
    <PageSection backgroundColor={white}>
      <Grid container direction="column">
        <Grid
          container
          item
          sx={{
            flexDirection: "row",
            [ps]: { flexDirection: "column" },
            [tl]: { flexDirection: "row" },
          }}
        >
          <Grid
            container
            direction="column"
            item
            sx={{
              width: "50%",
              [ps]: { width: "100%" },
              [tl]: { width: "50%" },
            }}
          >
            {title}
          </Grid>
          <Grid
            item
            sx={{
              width: "50%",
              [ps]: { width: "100%" },
              [tl]: { width: "50%" },
            }}
          >
            <Box sx={{ "> p": bodyLarge }}>{description}</Box>
          </Grid>
        </Grid>
        <Grid item sx={{ width: "100%" }}>
          <HorizontalCarousel
            breakpoints={{
              0: { slidesPerView: 1.25, spaceBetween: 20, visibleCount: 1.25 },
              1024: { slidesPerView: 2.5, spaceBetween: 40, visibleCount: 2.5 },
            }}
          >
            {rest}
          </HorizontalCarousel>
        </Grid>
      </Grid>
    </PageSection>
  );
};
