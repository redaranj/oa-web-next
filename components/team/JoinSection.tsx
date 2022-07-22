import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints, loader } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { OutlinedButton } from "components/common/OutlinedButton";
import joinTeam from "public/images/join-team.png";

export const JoinSection: FC = ({ children }) => {
  const { white, lightGrey } = colors;
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
            <Box sx={{ backgroundColor: lightGrey, py: 10, px: 5 }}>
              <Grid item>{children}</Grid>
              <Grid item>
                <Link href="/jobs" passHref>
                  <OutlinedButton arrowDirection="right">
                    Read More
                  </OutlinedButton>
                </Link>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Grid item sx={{ width: "50%" }}>
          <Box sx={{ height: 700 }}>
            <Image src={joinTeam} alt="" loader={loader} />
          </Box>{" "}
        </Grid>
      </Grid>
    </PageSection>
  );
};
