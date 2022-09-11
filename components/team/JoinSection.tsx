import { FC, PropsWithChildren } from "react";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints, loader, typography } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import joinOurTeam from "public/images/join-our-team.png";

export const JoinSection: FC<PropsWithChildren> = ({ children }) => {
  const { white, lightGrey } = colors;
  const { outlinedButton, bodyLarge } = typography;
  const { ps, pl, ts, tl, ds, dl } = breakpoints;

  return (
    <PageSection
      backgroundColor={white}
      sx={{
        mb: -1,
        py: 13,
        pb: 0,
        px: 11.25,
        [ps]: {
          py: 6,
          px: 3,
          pb: 0,
        },
        [pl]: {
          py: 6,
          px: 3,
          pb: 0,
        },
        [ts]: {
          py: 7,
          px: 4.375,
          pb: 0,
        },
        [tl]: {
          py: 9,
          px: 4.375,
          pb: 0,
        },
        [ds]: {
          py: 13,
          px: 6.25,
          pb: 0,
        },
        [dl]: {
          py: 13,
          px: 11.25,
          pb: 0,
        },
      }}
    >
      <Grid
        container
        sx={{
          flexDirection: "row",
          [ps]: { flexDirection: "column" },
          [tl]: { flexDirection: "row" },
        }}
      >
        <Grid
          item
          sx={{
            width: "50%",
            [ps]: { width: "100%" },
            [tl]: { width: "50%" },
          }}
        >
          <Box sx={{ backgroundColor: lightGrey }}>
            <Grid container direction="column" justifyContent="space-around">
              <Grid item>
                <Box
                  sx={{
                    "> p": bodyLarge,

                    py: 10,
                    px: 5,
                    a: outlinedButton,
                  }}
                >
                  {children}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-end"
          sx={{ width: "50%", backgroundColor: lightGrey }}
        >
          <Grid item sx={{ width: "100%" }}>
            <Box
              sx={{
                width: "80%",
                backgroundColor: lightGrey,
                margin: "0 auto",
              }}
            >
              <Image src={joinOurTeam} alt="" loader={loader} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </PageSection>
  );
};
