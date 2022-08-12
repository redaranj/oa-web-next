import { FC } from "react";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints, loader, typography } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import joinTeam from "public/images/join-team.png";

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
          container
          direction="column"
          justifyContent="space-around"
          item
          sx={{
            width: "50%",
            [ps]: { width: "100%" },
            [tl]: { width: "50%" },
          }}
        >
          <Grid item>
            <Box
              sx={{
                "> p": bodyLarge,
                backgroundColor: lightGrey,
                py: 10,
                px: 5,
                a: outlinedButton,
              }}
            >
              {children}
            </Box>
          </Grid>
        </Grid>
        <Grid item sx={{ width: "50%" }}>
          <Box sx={{ width: "100%" }}>
            <Image src={joinTeam} alt="" loader={loader} />
          </Box>
        </Grid>
      </Grid>
    </PageSection>
  );
};
