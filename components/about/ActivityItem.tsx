import { FC, PropsWithChildren } from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { colors, typography, breakpoints } from "styles/theme";

type ActivityItemProps = PropsWithChildren<{
  title: string;
  image: StaticImageData;
  url: string;
  height: number;
}>;

export const ActivityItem: FC<ActivityItemProps> = ({
  title,
  image,
  url,
  height,
}) => {
  const { white } = colors;
  const { h5 } = typography;
  const { ps, tl } = breakpoints;

  return (
    <Grid
      item
      sx={{
        width: "33%",
        [ps]: { width: "100%" },
        [tl]: { width: "33%" },
      }}
    >
      <Link href={url}>
        <Grid
          item
          container
          direction="column-reverse"
          sx={{
            height,
            backgroundImage: `url(${image.src})`,
            backgroundSize: "cover",
          }}
        >
          <Grid item>
            <Box
              component="h5"
              sx={{ ...h5, color: white, pl: 3, pb: 1, maxWidth: "50%" }}
            >
              {title}
            </Box>
          </Grid>
        </Grid>
      </Link>
    </Grid>
  );
};
