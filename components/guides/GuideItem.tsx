import { FC, PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { typography, colors, breakpoints, loader } from "styles/theme";

type GuideItemProps = PropsWithChildren<{
  title: string;
  description: string;
  category: string;
  path: string;
  image: string;
}>;

export const GuideItem: FC<GuideItemProps> = ({
  title,
  description,
  category,
  path,
  image: imageName,
}) => {
  const { h5, bodyLarge } = typography;
  const { lightGrey, darkGrey } = colors;
  const { ps, tl } = breakpoints;
  const image = require(`public/images/${imageName}`).default;

  return (
    <Link href={path} passHref>
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
              height: "100%",
              width: 400,
              [ps]: { width: "100%" },
              [tl]: { width: 400 },
              border: `1px solid ${lightGrey}`,
            }}
          >
            <Image src={image} alt="" loader={loader} />
          </Box>
        </Grid>
        <Grid
          item
          container
          direction="column"
          sx={{ backgroundColor: lightGrey, mt: 0, p: 4 }}
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
