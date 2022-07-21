import { FC } from "react";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { colors, typography, breakpoints } from "styles/theme";

export const MoreItem: FC = ({ children }) => {
  const { white, black, lightGrey } = colors;
  const { h5, bodyLarge } = typography;
  const { ps, tl } = breakpoints;
  const url = "";
  const image = "";

  return (
    <Grid
      item
      container
      direction="column"
      sx={{ width: "33%", [ps]: { width: "100%" }, [tl]: { width: "33%" } }}
    >
      <Link href={url}>
        <Box
          sx={{
            backgroundColor: lightGrey,
            height: "500px",
            backgroundImage: `url(${image})`,
            backgroundSize: "450px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom",
            p: 3,
          }}
        >
          <Grid item>
            <Box component="h5" sx={{ ...h5, color: black }}>
              {children}
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ ...bodyLarge, color: white }}>{children}</Box>
          </Grid>
        </Box>
      </Link>
    </Grid>
  );
};
