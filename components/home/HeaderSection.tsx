import { FC } from "react";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints, loader, typography } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import mainTop1 from "public/images/main-top-1.png";
import mainTop2 from "public/images/main-top-2.png";

export const HeaderSection: FC = ({ children }) => {
  const { white } = colors;
  const { bodyLarge } = typography;
  const { ps, ts, tl } = breakpoints;
  const [first, ...rest] = children as any[];

  return (
    <PageSection backgroundColor={white}>
      <Grid
        container
        sx={{
          flexDirection: "row",
          [ps]: { flexDirection: "column-reverse" },
          [ts]: { flexDirection: "row" },
        }}
        spacing={6}
      >
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
          <Grid item>{first}</Grid>
          <Grid
            item
            container
            direction="column"
            sx={{ mb: 12, [ps]: { mb: 0 }, [tl]: { mb: 12 } }}
          >
            <Grid item>
              <Box sx={{ "> p": bodyLarge }}>{rest}</Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
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
          <Grid
            item
            sx={{
              height: "100%",
              width: "80%",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                minHeight: 300,
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "65%",
                  top: 0,
                  left: 0,
                  zIndex: 100,
                }}
              >
                <Image src={mainTop1} alt="" loader={loader} />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  width: "65%",
                  top: "35%",
                  left: "35%",
                }}
              >
                <Image src={mainTop2} alt="" loader={loader} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </PageSection>
  );
};
