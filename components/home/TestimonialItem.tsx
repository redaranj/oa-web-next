import { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";

type TestimonialItemProps = PropsWithChildren<{
  name: string;
  position: string;
  quote: string;
  image: string;
}>;

export const TestimonialItem: FC<TestimonialItemProps> = ({
  name,
  position,
  quote,
  image,
}) => {
  return (
    <Grid item container direction="column" sx={{ width: "33%" }}>
      <Grid item>{quote}</Grid>
      <Grid item container direction="row">
        <Grid item>{image}</Grid>
        <Grid item container direction="column">
          <Grid item>{name}</Grid>
          <Grid item>{position}</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
