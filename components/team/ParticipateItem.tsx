import { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";
import { typography, breakpoints } from "styles/theme";

type ParticipateItemProps = PropsWithChildren<{
  title: string;
  backgroundColor: string;
  height: number;
}>;

export const ParticipateItem: FC<ParticipateItemProps> = ({
  title,
  backgroundColor,
  children,
  height,
}) => {
  const { h5 } = typography;
  const { ps, tl } = breakpoints;

  return (
    <Grid
      item
      sx={{ width: "33%", [ps]: { width: "100%" }, [tl]: { width: "50%" } }}
    >
      <Box sx={{ backgroundColor, p: 3, minHeight: height }}>
        <Grid
          item
          container
          direction="column"
          justifyContent="space-between"
          sx={{ height: "100%" }}
        >
          <Grid item>
            <Box sx={h5}>{title}</Box>
          </Grid>
          <Grid item>{children}</Grid>
        </Grid>
      </Box>
    </Grid>
  );
};
