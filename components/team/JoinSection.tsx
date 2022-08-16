import { FC } from "react";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints, loader, typography } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import joinOurTeam from "public/images/join-our-team.png";

export const JoinSection: FC = ({ children }) => {
  const { white, lightGrey } = colors;
  const { outlinedButton, bodyLarge } = typography;
  const { ps, tl } = breakpoints;

  return (
    <PageSection backgroundColor={white}>
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
