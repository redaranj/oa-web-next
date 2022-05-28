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
    <Grid
      item
      container
      direction="column"
      sx={{ width: "25%", backgroundColor: lightGrey }}
    >
      <Grid item>
        <Box component="p" sx={bodyLarge}>
          {number}
        </Box>
      </Grid>
      <Grid item>
        <Box component="h5" sx={h5}>
          {title}
        </Box>
      </Grid>
    </Grid>
  );
};
