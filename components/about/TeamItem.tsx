import { FC } from "react";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { colors, typography, breakpoints } from "styles/theme";

export const TeamItem: FC = ({ children }) => {
  const { white } = colors;
  const { h5 } = typography;
  const { ps, tl } = breakpoints;
  const [image, ...rest] = children as any[];
  const url = "";
  const height = 400;

  return (
    <Grid
      item
      sx={{
        width: "33%",
        [ps]: { width: "100%" },
        [tl]: { width: "33%" },
      }}
    >
      <Link href={url}>
        <Grid
          item
          container
          direction="column-reverse"
          sx={{
            height,
            backgroundImage: `url(/images/${image})`,
            backgroundSize: "cover",
          }}
        >
          <Grid item>
            <Box
              component="h5"
              sx={{ ...h5, color: white, pl: 3, pb: 1, maxWidth: "50%" }}
            >
              {rest}
            </Box>
          </Grid>
        </Grid>
      </Link>
    </Grid>
  );
};
