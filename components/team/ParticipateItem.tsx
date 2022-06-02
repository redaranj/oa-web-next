import { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";
import { typography } from "styles/theme";

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

  return (
    <Grid item xs={4}>
      <Box sx={{ backgroundColor, p: 3, height }}>
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
