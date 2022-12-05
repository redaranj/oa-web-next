import { FC, PropsWithChildren } from "react";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints, loader, typography } from "styles/theme";
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
          flexDirection: "row",
          [ps]: {
            flexDirection: "column",
          },
          [tl]: {
            flexDirection: "row",
          },
        }}
      >
        <Grid
          item
          container
          justifyContent="space-around"
          sx={{
            width: "50%",
            [ps]: {
              width: "100%",
            },
            [tl]: {
              width: "50%",
            },
          }}
        >
          <Grid item>
            <Box sx={{}}>
              <Image src={vision} alt="" loader={loader} />
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="space-around"
          item
          sx={{
            width: "50%",
            [ps]: {
              width: "100%",
            },
            [tl]: {
              width: "50%",
            },
          }}
        >
          <Grid item>
            <Box
              sx={{
                "> p": { ...bodyLarge, fontWeight: 600 },
                backgroundColor: lightGrey,
                p: 6,
              }}
            >
              {children}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </PageSection>
  );
};
