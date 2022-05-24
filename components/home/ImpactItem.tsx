import { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";

type ImpactItemProps = PropsWithChildren<{
  title: string;
  description: string;
  image: string;
}>;

export const ImpactItem: FC<ImpactItemProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <Grid container direction="column" sx={{ width: "25%" }}>
      <Grid item>{image}</Grid>
      <Grid item>{title}</Grid>
      <Grid item>{description}</Grid>
    </Grid>
  );
};
