import { FC, PropsWithChildren } from "react";
import Image, { StaticImageData } from "next/image";
import { Box, Grid } from "@mui/material";
import { typography, loader, breakpoints } from "styles/theme";

type ImpactItemProps = PropsWithChildren<{
  title: string;
  description: string;
  image: StaticImageData;
}>;

export const ImpactItem: FC<ImpactItemProps> = ({
  title,
  description,
  image,
}) => {
  const { h5, bodyLarge } = typography;
  const { tl, pl, ps } = breakpoints;

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
        [pl]: {
          width: "50%",
        },
        [tl]: {
          width: "25%",
        },
      }}
    >
      <Grid item>
        <Image src={image} alt="" width="60px" loader={loader} />
      </Grid>
      <Grid item>
        <Box component="h5" sx={h5}>
          {title}
        </Box>
      </Grid>
      <Grid item>
        <Box component="p" sx={bodyLarge}>
          {description}
        </Box>
      </Grid>
    </Grid>
  );
};
