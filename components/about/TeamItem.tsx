import { FC, PropsWithChildren } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints, typography, loader } from "styles/theme";
import { OutlinedButton } from "components/common/OutlinedButton";
import ourTeam from "public/images/our-team-who-we-are.png";

export const TeamItem: FC<PropsWithChildren> = ({ children }) => {
  const { lightGrey, black } = colors;
  const { bodyLarge } = typography;

  const { ps, tl } = breakpoints;

  return (
    <Box
      sx={{
        backgroundColor: lightGrey,
        mb: 8,
        p: 6,
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
          container
          direction="column"
          justifyContent="center"
          sx={{
            width: "50%",
            [ps]: { width: "100%" },
            [tl]: { width: "50%" },
          }}
        >
          <Grid item>
            <Box
              sx={{
                width: "85%",
                margin: "0 auto",
              }}
            >
              <Image src={ourTeam} alt="" loader={loader} />
            </Box>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          justifyContent="space-around"
          sx={{
            width: "50%",
            [ps]: { width: "100%" },
            [tl]: { width: "50%" },
          }}
        >
          <Box sx={{ pl: 6, pb: 2, "> p": bodyLarge }}>{children}</Box>
          <Box sx={{ pl: 6, maxWidth: "50%" }}>
            <Link href="/team">
              <OutlinedButton textColor={black} arrowDirection="right">
                Learn more
              </OutlinedButton>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
