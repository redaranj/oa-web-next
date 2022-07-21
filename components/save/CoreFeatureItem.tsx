import { FC } from "react";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { typography, colors, loader, breakpoints } from "styles/theme";

export const CoreFeatureItem: FC = ({ children }) => {
  const { h5, bodyLarge } = typography;
  const { lightGrey } = colors;
  const { ps, tl } = breakpoints;
  const [image, title, ...description] = children as any[];

  return (
    <Grid
      item
      container
      direction="column"
      sx={{ width: "50%", [ps]: { width: "100%" }, [tl]: { width: "50%" } }}
    >
      <Grid item sx={{ backgroundColor: lightGrey, p: 3 }}>
        <Image src={image} loader={loader} alt="" />
      </Grid>
      <Grid item sx={{ backgroundColor: lightGrey, p: 3 }}>
        <Box component="h5" sx={h5}>
          {title}
        </Box>
      </Grid>
      <Grid item sx={{ backgroundColor: lightGrey, minHeight: 100 }}>
        <Box component="p" sx={bodyLarge}>
          {description}
        </Box>
      </Grid>
    </Grid>
  );
};
