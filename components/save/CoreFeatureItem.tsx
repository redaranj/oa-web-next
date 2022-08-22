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

        [ps]: { width: "100%" },
        [tl]: { width: "50%" },
      }}
    >
      <Box
        sx={{
          height: "470px",
          backgroundColor: lightGrey,
          width: "100%",
          "&:hover .slide": {
            transition: "0.5s",
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
            height: "470px",
            position: "absolute",
            bottom: "-470px",
            transition: "1.5s",
          }}
        >
          <Box
            sx={{
              "> p": {
                ...bodyLarge,
                color: white,
                "& em > strong": {
                  color: white,
                },
                p: 4,
                m: 0,
              },
              a: {
                textDecoration: "underline",
                textDecorationStyle: "dashed",
              },
            }}
          >
            {description}
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};
