import { FC, PropsWithChildren } from "react";
import { StaticImageData } from "next/image";
import { Box, Grid } from "@mui/material";
import { typography, colors } from "styles/theme";

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
  const { lightGrey, white } = colors;

  return (
    <Grid item container direction="row" flexWrap="nowrap" spacing={0}>
      <Grid item>
        <Box
          sx={{
            height: 300,
            width: 400,
            p: 2,
            backgroundImage: `url(${image.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box
            sx={{
              ...bodyLarge,
              color: white,
              borderTop: `1px solid ${white}`,
              mt: 2,
            }}
          >
            Category
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        container
        direction="column"
        sx={{ backgroundColor: lightGrey, mt: 0, p: 4 }}
      >
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
