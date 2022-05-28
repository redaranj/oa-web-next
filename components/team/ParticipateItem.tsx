import { FC, PropsWithChildren } from "react";
import { Grid } from "@mui/material";

type ParticipateItemProps = PropsWithChildren<{
  title: string;
  backgroundColor: string;
}>;

export const ParticipateItem: FC<ParticipateItemProps> = ({
  title,
  backgroundColor,
  children,
}) => (
  <Grid
    item
    container
    direction="column"
    sx={{ backgroundColor }}
    spacing={4}
    xs={4}
  >
    <Grid item>{title}</Grid>
    <Grid item>{children}</Grid>
  </Grid>
);
