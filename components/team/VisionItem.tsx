import { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";
import { typography, colors } from "styles/theme";

type VisionItemProps = PropsWithChildren<{
  title: string;
  number: string;
}>;

export const VisionItem: FC<VisionItemProps> = ({ title, number }) => {
  const { h5, bodyLarge } = typography;
  const { lightGrey } = colors;

  return (
    <Grid item sx={{ width: "25%" }}>
      <Grid
        item
        container
        direction="column"
        sx={{ backgroundColor: lightGrey, minHeight: 300 }}
      >
        <Grid item>
          <Box component="p" sx={{ ...bodyLarge, p: 3 }}>
            {number}
          </Box>
        </Grid>
        <Grid item>
          <Box component="h5" sx={{ ...h5, p: 3 }}>
            {title}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
