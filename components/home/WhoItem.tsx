import { FC, PropsWithChildren } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { colors, loader, typography } from "styles/theme";
import plus from "images/plus.svg";
import quote from "images/quote.svg";

type WhoItemProps = PropsWithChildren<{
  name: string;
  profile: string;
  description: string;
  url: string;
  image: StaticImageData;
}>;

export const WhoItem: FC<WhoItemProps> = ({
  name,
  profile,
  description,
  url,
  image,
}) => {
  const { lightGrey, turquoise } = colors;
  const { h5, body, bodyLarge } = typography;

  return (
    <Link href={url}>
      <Grid item container direction="row" sx={{ width: "50%" }}>
        <Grid
          item
          sx={{
            width: "50%",
          }}
        >
          <Box
            sx={{
              backgroundColor: lightGrey,
              backgroundImage: `url(${image.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
          />
        </Grid>
        <Grid container item sx={{ width: "50%", backgroundColor: lightGrey }}>
          <Grid item>
            <Box component="h5" sx={{ ...h5, color: turquoise }}>
              {name}
            </Box>
            <Image src={plus} loader={loader} />
          </Grid>
          <Grid item>
            <Box component="p" sx={body}>
              {profile}
            </Box>
          </Grid>
          <Grid item>
            <Image src={quote} loader={loader} />
            <Box component="p" sx={bodyLarge}>
              {description}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Link>
  );
};
