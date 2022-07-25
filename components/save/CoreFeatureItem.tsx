import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { typography, colors, breakpoints } from "styles/theme";

export const CoreFeatureItem: FC = ({ children }) => {
  const { bodyLarge } = typography;
  const { lightGrey, turquoise, white } = colors;
  const { ps, tl } = breakpoints;
  const [image, title, ...description] = children as any[];

  return (
    <Grid
      item
      sx={{
        width: "50%",
        height: "400px",
        [ps]: { width: "100%" },
        [tl]: { width: "50%" },
      }}
    >
      <Box
        sx={{
          backgroundColor: lightGrey,
          width: "100%",
          height: "100%",
          "&:hover .slide": {
            transition: "1s",
            bottom: "0px",
          },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Grid container direction="column" justifyContent="space-around">
          <Grid item>
            <Box sx={{ p: 6, pb: 0 }}>
              {image}
              {title}
            </Box>
          </Grid>
        </Grid>
        <Box
          className="slide"
          sx={{
            width: "100%",
            backgroundColor: turquoise,
            color: white,
            height: "400px",
            position: "absolute",
            bottom: "-400px",
            transition: "1s",
          }}
        >
          <Box sx={{ ...bodyLarge, color: white, p: 6 }}>{description}</Box>
        </Box>
      </Box>
    </Grid>
  );
};
