import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { breakpoints, colors, typography } from "styles/theme";

export const AdditionalFeatureItem: FC = ({ children }) => {
  const { white, turquoise, lightGrey } = colors;
  const { bodyLarge } = typography;
  const { ps, tl } = breakpoints;
  const [image, title, ...description] = children as any[];

  return (
    <Grid
      item
      sx={{ width: "50%", [ps]: { width: "100%" }, [tl]: { width: "50%" } }}
    >
      <Box
        sx={{
          height: "370px",
          backgroundColor: lightGrey,
          width: "100%",
          "&:hover .slide": {
            transition: "1s",
            bottom: "0px",
          },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{ p: 6, backgroundColor: white, width: "100%", height: "100%" }}
        >
          {image}
          {title}
        </Box>
        <Box
          className="slide"
          sx={{
            width: "100%",
            backgroundColor: `${turquoise}fd`,
            color: white,
            height: "370px",
            position: "absolute",
            bottom: "-370px",
            transition: "1s",
          }}
        >
          <Box
            sx={{
              "> p": {
                ...bodyLarge,
                color: white,
                p: 4,
                m: 0,
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
