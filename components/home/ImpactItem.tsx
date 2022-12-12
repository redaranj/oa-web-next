import { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";
import { typography, breakpoints } from "styles/theme";

export const ImpactItem: FC<PropsWithChildren> = ({ children }) => {
  const { bodyLarge } = typography;
  const { tl, ts, ps } = breakpoints;
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
        [ts]: {
          width: "50%",
        },
        [tl]: {
          width: "25%",
        },
      }}
    >
      <Grid item>
        <Box sx={{ width: "70px", height: "70px", mb: 3 }}>{image}</Box>
      </Grid>
      <Grid item>{title}</Grid>
      <Grid item>
        <Box sx={{ "> p": bodyLarge }}>{description}</Box>
      </Grid>
    </Grid>
  );
};
