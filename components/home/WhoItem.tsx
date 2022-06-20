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
  backgroundProps: any;
}>;

export const WhoItem: FC<WhoItemProps> = ({
  name,
  profile,
  description,
  url,
  image,
  backgroundProps,
}) => {
  const { lightGrey } = colors;
  const { h5, body, bodyLarge } = typography;

  return (
    <Link href={url}>
      <Grid
        item
        container
        direction="row"
        flexWrap="nowrap"
        sx={{ height: 600 }}
      >
        <Grid item sx={{ width: "250px" }}>
          <Box
            sx={{
              backgroundColor: lightGrey,
              backgroundImage: `url(${image.src})`,
              backgroundSize: "150px",
              backgroundPosition: "40px 50px",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
              ...backgroundProps,
            }}
          />
        </Grid>
        <Grid
          container
          direction="column"
          wrap="nowrap"
          item
          sx={{ width: "70%", backgroundColor: lightGrey, p: 6 }}
        >
          <Grid item container direction="row" spacing={2} alignItems="center">
            <Grid item>
              <Box component="h5" sx={{ ...h5 }}>
                {name}
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ mt: -1 }}>
                <Image src={plus} loader={loader} />
              </Box>
            </Grid>
          </Grid>
          <Grid item>
            <Box component="p" sx={{ ...body, mb: 4 }}>
              {profile}
            </Box>
          </Grid>
          <Grid item>
            <Image src={quote} loader={loader} />
            <Box component="p" sx={{ bodyLarge, mb: 2 }}>
              {description}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Link>
  );
};
