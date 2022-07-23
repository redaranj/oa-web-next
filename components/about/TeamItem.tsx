import { FC } from "react";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints } from "styles/theme";
import staff from "public/images/staff.svg";

export const TeamItem: FC = ({ children }) => {
  const { lightGrey } = colors;
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
            <Box
              sx={{
                backgroundImage: `url(${staff.src})`,
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
            <Box sx={{ p: 6 }}>{children}</Box>
          </Grid>
        </Grid>
      </Box>
    </Link>
  );
};
