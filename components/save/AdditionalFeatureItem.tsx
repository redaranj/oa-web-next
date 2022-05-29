import { FC, PropsWithChildren } from "react";
import Image, { StaticImageData } from "next/image";
import { Box, Grid } from "@mui/material";
import { typography, colors, loader } from "styles/theme";

type AdditionalFeatureItemProps = PropsWithChildren<{
  title: string;
  description: string;
  image: StaticImageData;
}>;

export const AdditionalFeatureItem: FC<AdditionalFeatureItemProps> = ({
  title,
  description,
  image,
}) => {
  const { h5, bodyLarge } = typography;
  const { lightGrey } = colors;

  return (
    <Grid
      item
      container
      direction="column"
      sx={{ width: "50%", backgroundColor: lightGrey, minHeight: 200 }}
    >
      <Grid item>
        <Image src={image} loader={loader} alt="" />
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
