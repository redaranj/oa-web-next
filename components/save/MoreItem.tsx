import { FC, PropsWithChildren } from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { colors, typography } from "styles/theme";

type MoreItemProps = PropsWithChildren<{
  title: string;
  description?: string;
  image: StaticImageData;
  url: string;
}>;

export const MoreItem: FC<MoreItemProps> = ({
  title,
  description,
  image,
  url,
}) => {
  const { white, black, lightGrey } = colors;
  const { h5, bodyLarge } = typography;

  return (
    <Grid item container direction="column" sx={{ width: "33%" }}>
      <Link href={url}>
        <Box
          sx={{
            backgroundColor: lightGrey,
            height: "500px",
            backgroundImage: `url(${image.src})`,
            backgroundSize: "450px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom",
            p: 3,
          }}
        >
          <Grid item>
            <Box component="h5" sx={{ ...h5, color: black }}>
              {title}
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ ...bodyLarge, color: white }}>{description}</Box>
          </Grid>
        </Box>
      </Link>
    </Grid>
  );
};
