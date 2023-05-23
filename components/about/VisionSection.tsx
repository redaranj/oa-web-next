import { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints, typography } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import vision from "public/images/AboutUs/about-us-1.png";

export const VisionSection: FC<PropsWithChildren> = ({ children }) => {
  const { white, lightGrey } = colors;
  const { bodyLarge } = typography;
  const { ps, tl } = breakpoints;

  return (
    <PageSection backgroundColor={white}>
      <Grid
        item
        container
        sx={{
          backgroundColor: lightGrey,
          flexDirection: "row",
          [ps]: {
            flexDirection: "column",
          },
          [tl]: {
            flexDirection: "row",
          },
          height: "100%",
        }}
      >
        <Grid
          item
          container
          justifyContent="space-around"
          sx={{
            height: "100%",
            width: "50%",
            [ps]: {
              width: "100%",
            },
            [tl]: {
              width: "50%",
            },
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              backgroundImage: `url(${vision.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: 360,
            }}
          />
        </Grid>
        <Grid
          item
          sx={{
            height: "100%",
            width: "50%",
            [ps]: {
              width: "100%",
            },
            [tl]: {
              width: "50%",
            },
          }}
        >
          <Box
            sx={{
              height: "100%",
              "> p": { ...bodyLarge, fontWeight: 600 },
              backgroundColor: lightGrey,
              p: 6,
              pt: 8,
              minHeight: 330,
            }}
          >
            {children}
          </Box>
        </Grid>
      </Grid>
    </PageSection>
  );
};
