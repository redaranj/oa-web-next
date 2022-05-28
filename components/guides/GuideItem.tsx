import { FC, PropsWithChildren } from "react";
import Image, { StaticImageData } from "next/image";
import { Box, Grid } from "@mui/material";
import { typography, loader } from "styles/theme";

type GuideItemProps = PropsWithChildren<{
  title: string;
  description: string;
  image: StaticImageData;
}>;

export const GuideItem: FC<GuideItemProps> = ({
  title,
  description,
  image,
}) => {
  const { h5, bodyLarge } = typography;

  return (
    <Grid item container direction="row" flexWrap="nowrap" spacing={4}>
      <Grid item>
        <Box sx={{ width: "200px" }}>
          <Image src={image} alt="" loader={loader} />
        </Box>
      </Grid>
      <Grid item container direction="column">
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
    </Grid>
  );
};
