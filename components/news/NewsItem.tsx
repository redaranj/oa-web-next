import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { typography, colors, breakpoints } from "styles/theme";

type NewsItemProps = PropsWithChildren<{
  title: string;
  description: string;
  category: string;
  path: string;
  image: string;
}>;

export const NewsItem: FC<NewsItemProps> = ({
  title,
  description,
  category,
  path,
  image,
}) => {
  const { h5, bodyLarge } = typography;
  const { white } = colors;
  const { ps, tl } = breakpoints;

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
              backgroundImage: `url(/images/${image})`,
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
              {category}
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
