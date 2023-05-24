import { FC, PropsWithChildren } from "react";
import Image from "next/legacy/image";
import { Box, Grid } from "@mui/material";
import { loader, breakpoints, typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { loadImage } from "lib/frontendHelpers";

export const IntroSection: FC<PropsWithChildren> = ({ children }) => {
  const { white } = colors;
  const { bodyLarge } = typography;
  const { ps, tl } = breakpoints;
  const [first, ...rest] = children as any[];
  const image = loadImage(first);

  return (
    <PageSection backgroundColor={white}>
      <Grid container direction="column">
        <Grid
          item
          container
          spacing={8}
          sx={{
            flexDirection: "row-reverse",
            [ps]: {
              flexDirection: "column",
            },
            [tl]: {
              flexDirection: "row-reverse",
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
              [tl]: {
                width: "50%",
              },
            }}
          >
            <Box
              sx={{
                margin: "0 auto",
                textAlign: "center",
                size: "100%",
              }}
            >
              <Image src={image} alt="" loader={loader} />
            </Box>
          </Grid>
          <Grid
            container
            direction="column"
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
              <Box sx={{ "> p": bodyLarge }}>{rest}</Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PageSection>
  );
};
