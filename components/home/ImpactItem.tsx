import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { typography, breakpoints } from "styles/theme";

export const ImpactItem: FC = ({ children }) => {
  const { h5, bodyLarge } = typography;
  const { tl, pl, ps } = breakpoints;
  const [image, title, ...description] = children as any[];

  return (
    <Grid
      item
      container
      direction="column"
      sx={{
        width: "25%",
        [ps]: {
          width: "100%",
        },
        [pl]: {
          width: "50%",
        },
        [tl]: {
          width: "25%",
        },
      }}
    >
      <Grid item>
        <Box sx={{ width: "50px", mb: "8px" }}>{image}</Box>
      </Grid>
      <Grid item>
        <Box component="h5" sx={h5}>
          {title}
        </Box>
      </Grid>
      <Grid item>
        <Box component="p" sx={bodyLarge}>
          {description}
        </Box>
      </Grid>
    </Grid>
  );
};
