import { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";
import { typography, colors } from "styles/theme";

type VisionItemProps = PropsWithChildren<{
  title: string;
  number: string;
}>;

export const VisionItem: FC<VisionItemProps> = ({ title, number }) => {
  const { h6, body } = typography;
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
          <Box component="p" sx={{ ...body, p: 3, pb: 4 }}>
            {number}
          </Box>
        </Grid>
        <Grid item>
          <Box component="h6" sx={{ ...h6, p: 3 }}>
            {title}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
