import { FC } from "react";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { typography, colors, loader, breakpoints } from "styles/theme";

export const CoreFeatureItem: FC = ({ children }) => {
  const { h5, bodyLarge } = typography;
  const { lightGrey, turquoise, white } = colors;
  const { ps, tl } = breakpoints;
  const [image, title, ...description] = children as any[];

  return (
    <Grid
      item
      container
      direction="column"
      sx={{
        width: "50%",
        [ps]: { width: "100%" },
        [tl]: { width: "50%" },
        "&:hover #slide": {
          transition: "1s",
          bottom: "0px",
        },
        position: "relative",
      }}
    >
      <Grid item sx={{ backgroundColor: lightGrey, p: 3 }}>
        {image}
      </Grid>
      <Grid item sx={{ backgroundColor: lightGrey, p: 3 }}>
        <Box component="h5" sx={h5}>
          {title}
        </Box>
      </Grid>
      <Box
        id="slide"
        sx={{
          width: "100%",
          backgroundColor: turquoise,
          color: white,
          height: "300px",
          position: "absolute",
          bottom: "-300px",
          transition: "1s",
        }}
      >
        <Box sx={{ ...bodyLarge, color: white, p: 6 }}>{description}</Box>
      </Box>
    </Grid>
  );
};
