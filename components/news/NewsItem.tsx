import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { typography, colors, breakpoints } from "styles/theme";
import { loadImage } from "lib/frontendHelpers";

type NewsItemProps = PropsWithChildren<{
  title: string;
  description: string;
  category: string;
  date: string;
  path: string;
  image: string;
}>;

export const NewsItem: FC<NewsItemProps> = ({
  title,
  description,
  category,
  date,
  path,
  image,
}) => {
  const { h5, bodyLarge } = typography;
  const { white, darkGrey } = colors;
  const { ps, tl } = breakpoints;
  const loadedImage = require(`public/images/${image}`).default;

  return (
    <Link href={path}>
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
              backgroundImage: `url(${loadedImage.src})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Box
              sx={{
                ...bodyLarge,
                color: white,
                m: 2,
              }}
            >
              {date}
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          container
          direction="column"
          sx={{ mt: 0, p: 4, backgroundColor: white }}
        >
          <Grid item>
            <Box
              sx={{
                ...bodyLarge,
                color: darkGrey,
                mt: 2,
              }}
            >
              {category}
            </Box>
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
      </Grid>
    </Link>
  );
};
