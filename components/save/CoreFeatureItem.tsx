import { FC, PropsWithChildren } from "react";
import Image, { StaticImageData } from "next/image";
import { Box, Grid } from "@mui/material";
import { typography, colors, loader } from "styles/theme";

type CoreFeatureItemProps = PropsWithChildren<{
  title: string;
  description: string;
  image: StaticImageData;
}>;

export const CoreFeatureItem: FC<CoreFeatureItemProps> = ({
  title,
  description,
  image,
}) => {
  const { h5, bodyLarge } = typography;
  const { lightGrey } = colors;

  return (
    <Grid item container direction="column" sx={{ width: "50%" }}>
      <Grid item sx={{ backgroundColor: lightGrey }}>
        <Image src={image} loader={loader} alt="" />
      </Grid>
      <Grid item sx={{ backgroundColor: lightGrey, p: 3 }}>
        <Box component="h5" sx={h5}>
          {title}
        </Box>
      </Grid>
      <Grid item sx={{ backgroundColor: lightGrey, minHeight: 200 }}>
        <Box component="p" sx={bodyLarge}>
          {description}
        </Box>
      </Grid>
    </Grid>
  );
};
