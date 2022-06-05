import { FC, PropsWithChildren } from "react";
import { StaticImageData } from "next/image";
import { Box, Grid } from "@mui/material";
import { typography, colors, breakpoints } from "styles/theme";

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
  const { ps, tl } = breakpoints;

  return (
    <Grid
      item
      container
      flexWrap="nowrap"
      spacing={0}
      sx={{
        flexDirection: "row",
        [ps]: { flexDirection: "column" },
        [tl]: { flexDirection: "row" },
      }}
    >
      <Grid item>
        <Box
          sx={{
            height: 300,
            width: 400,
            [ps]: { width: "100%" },
            [tl]: { width: 400 },
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
