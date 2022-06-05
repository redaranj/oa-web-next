import { FC, PropsWithChildren } from "react";
import Image, { StaticImageData } from "next/image";
import { Box, Grid } from "@mui/material";
import { typography, loader, breakpoints } from "styles/theme";

type AdditionalFeatureItemProps = PropsWithChildren<{
  title: string;
  description: string;
  backgroundColor: string;
  textColor: string;
  image: StaticImageData;
}>;

export const AdditionalFeatureItem: FC<AdditionalFeatureItemProps> = ({
  title,
  description,
  backgroundColor,
  textColor,
  image,
}) => {
  const { h5, bodyLarge } = typography;
  const { ps, tl } = breakpoints;
  console.log({ description });

  return (
    <Grid
      item
      sx={{ width: "50%", [ps]: { width: "100%" }, [tl]: { width: "100%" } }}
    >
      <Grid
        container
        direction="column"
        sx={{ backgroundColor, minHeight: 200, p: 6 }}
        rowSpacing={3}
      >
        <Grid item>
          <Image src={image} loader={loader} alt="" />
        </Grid>
        <Grid item>
          <Box component="h5" sx={{ ...h5, textColor }}>
            {title}
          </Box>
        </Grid>
        <Grid item>
          <Box component="p" sx={{ ...bodyLarge, textColor }} />
        </Grid>
      </Grid>
    </Grid>
  );
};
