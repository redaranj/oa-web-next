import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { typography, colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { HorizontalCarousel } from "components/common/HorizontalCarousel";
import { WhoItem } from "components/home/WhoItem";

type WhoSectionProps = {
  pages: any[];
};

export const WhoSection: FC<WhoSectionProps> = ({ pages, children }) => {
  const { bodyLarge } = typography;
  const { white } = colors;
  const { ps, ts } = breakpoints;
  const [title, ...description] = children as any[];

  return (
    <PageSection backgroundColor={white}>
      <Box>
        <Grid
          item
          container
          sx={{
            pb: 8,
            flexDirection: "row",
            [ps]: {
              flexDirection: "column",
            },
            [ts]: {
              flexDirection: "row",
            },
          }}
        >
          <Grid
            item
            sx={{
              width: "50%",
              [ps]: {
                width: "100%",
              },
              [ts]: {
                width: "50%",
              },
            }}
          >
            {title}
          </Grid>
          <Grid
            item
            sx={{
              width: "50%",
              [ps]: {
                width: "100%",
              },
              [ts]: {
                width: "50%",
              },
            }}
          >
            <Box sx={{ "> p": bodyLarge }}>{description}</Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <HorizontalCarousel columnOnMobile visibleCount={1.5}>
          {pages.map((page) => (
            <WhoItem key={page.path} {...page} />
          ))}
        </HorizontalCarousel>
      </Box>
    </PageSection>
  );
};
