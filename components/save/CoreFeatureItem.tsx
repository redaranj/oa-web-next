import { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";
import { typography, colors } from "styles/theme";

export const CoreFeatureItem: FC<PropsWithChildren> = ({ children }) => {
  const { bodyLarge } = typography;
  const { lightGrey, turquoise, white } = colors;
  const [image, title, ...description] = children as any[];

  return (
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
      <Grid
        container
        direction="column"
        justifyContent="space-around"
        sx={{ width: "100%" }}
      >
        <Grid item sx={{ width: "100%" }}>
          <Box sx={{ p: 6, pb: 0, width: "100%" }}>
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
  );
};
