import { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";
import { colors } from "styles/theme";

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
  const { white } = colors;

  return (
    <Grid item container direction="column" sx={{ width: "33%" }}>
      <Grid item sx={{ backgroundColor: white }}>
        {quote}
      </Grid>
      <Grid item container direction="row">
        <Grid item>
          <Box
            component="img"
            src={`/images/${image}`}
            sx={{ height: "50px", width: "50px" }}
          />
        </Grid>
        <Grid item container direction="column">
          <Grid item>{name}</Grid>
          <Grid item>{position}</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
