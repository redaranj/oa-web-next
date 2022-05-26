import { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";

type WhoItemProps = PropsWithChildren<{
  name: string;
  profile: string;
  description: string;
  url: string;
  image: string;
}>;

export const WhoItem: FC<WhoItemProps> = ({
  name,
  profile,
  description,
  url,
  image,
}) => {
  return (
    <Grid container direction="row" sx={{ width: "50%" }}>
      <Grid item sx={{ width: "50%" }}>
        {image}
      </Grid>
      <Grid container item sx={{ width: "50%" }}>
        <Grid item>{name}</Grid>
        <Grid item>{profile}</Grid>
        <Grid item>{description}</Grid>
      </Grid>
    </Grid>
  );
};
