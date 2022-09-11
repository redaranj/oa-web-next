import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints, typography } from "styles/theme";
import advisoryBoard from "public/images/advisory-board.svg";

export const BoardItem: FC<PropsWithChildren> = ({ children }) => {
  const { lightGrey } = colors;
  const { bodyLarge } = typography;
  const { ps, tl } = breakpoints;

  return (
    <Link href="/team">
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
            flexDirection: "row-reverse",
            [ps]: { flexDirection: "column" },
            [tl]: { flexDirection: "row-reverse" },
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
            <Box
              sx={{
                backgroundImage: `url(${advisoryBoard.src})`,
                backgroundSize: "75%",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                height: "100%",
              }}
            />
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
            <Box sx={{ p: 6, "> p": bodyLarge }}>{children}</Box>
          </Grid>
        </Grid>
      </Box>
    </Link>
  );
};
