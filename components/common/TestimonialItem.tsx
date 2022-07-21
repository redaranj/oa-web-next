import { FC } from "react";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { colors, loader, typography } from "styles/theme";

/*
type TestimonialItemProps = PropsWithChildren<{
  name: string;
  position: string;
  quote: string;
  image: StaticImageData;
}>;
*/

export const TestimonialItem: FC = ({ children }) => {
  const { white, turquoise } = colors;
  const { h6, body } = typography;
  const name = "";
  const position = "";
  const quote = "";
  const image = "";
  console.log({ children });
  return (
    <Grid item container direction="column" spacing="32px">
      <Grid item>
        <Box sx={{ backgroundColor: white, p: 3 }}>{quote}</Box>
      </Grid>
      <Grid item container direction="row" flexWrap="nowrap" spacing={3}>
        <Grid item>
          <Box sx={{ width: 60, height: 60 }}>
            <Image src={image} loader={loader} />
          </Box>
        </Grid>
        <Grid item container direction="column">
          <Grid item>
            <Box component="h6" sx={{ ...h6, mt: "-4px" }}>
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
