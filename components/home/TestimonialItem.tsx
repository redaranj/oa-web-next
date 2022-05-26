import { FC, PropsWithChildren } from "react";
import Image, { StaticImageData } from "next/image";
import { Box, Grid } from "@mui/material";
import { colors, loader, typography } from "styles/theme";

type TestimonialItemProps = PropsWithChildren<{
  name: string;
  position: string;
  quote: string;
  image: StaticImageData;
}>;

export const TestimonialItem: FC<TestimonialItemProps> = ({
  name,
  position,
  quote,
  image,
}) => {
  const { white, turquoise } = colors;
  const { h6, body } = typography;

  return (
    <Grid item container direction="column" sx={{ width: "33%" }} spacing={4}>
      <Grid item>
        <Box sx={{ backgroundColor: white, p: 3 }}>{quote}</Box>
      </Grid>
      <Grid item container direction="row" flexWrap="nowrap" spacing={2}>
        <Grid item>
          <Image src={image} loader={loader} height="50px" width="50px" />
        </Grid>
        <Grid item container direction="column">
          <Grid item>
            <Box component="h6" sx={{ ...h6 }}>
              {name}
            </Box>
          </Grid>
          <Grid item>
            <Box component="p" sx={{ ...body, color: turquoise }}>
              {position}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
