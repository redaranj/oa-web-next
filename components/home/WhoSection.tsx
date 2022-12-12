import { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";
import { typography, colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { HorizontalCarousel } from "components/common/HorizontalCarousel";
import { WhoItem } from "components/home/WhoItem";

type WhoSectionProps = PropsWithChildren<{
  pages: any[];
}>;

export const WhoSection: FC<WhoSectionProps> = ({ pages, children }) => {
  const { bodyLarge } = typography;
  const { white, turquoise } = colors;
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
            <Box
              sx={{
                "> p": {
                  ...bodyLarge,
                  em: { color: turquoise, fontWeight: "bold" },
                },
              }}
            >
              {description}
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ a: { textDecoration: "none !important" } }}>
        <HorizontalCarousel
          columnOnMobile
          visibleCount={1.5}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20, visibleCount: 1 },
            575: {
              slidesPerView: 1.25,
              spaceBetween: 20,
              visibleCount: 1.25,
            },
            1024: { slidesPerView: 1.5, spaceBetween: 40, visibleCount: 1.5 },
          }}
        >
          {pages.map((page) => (
            <WhoItem key={page.path} {...page} />
          ))}
        </HorizontalCarousel>
      </Box>
    </PageSection>
  );
};
