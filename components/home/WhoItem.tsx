import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { colors, loader, typography } from "styles/theme";
import plus from "public/images/plus.svg";
import quotationMark from "public/images/quote.svg";

type WhoItemProps = PropsWithChildren<{
  name: string;
  title: string;
  quote: string;
  path: string;
  image: string;
  backgroundProps: any;
}>;

export const WhoItem: FC<WhoItemProps> = ({
  name,
  title,
  quote,
  path,
  image,
  backgroundProps,
}) => {
  const { lightGrey } = colors;
  const { h5, body, bodyLarge } = typography;
  const loadedImage = require(`public/images/${image}`).default;

  return (
    <Link href={path}>
      <Grid
        item
        container
        direction="row"
        flexWrap="nowrap"
        sx={{ height: 400 }}
      >
        <Grid item sx={{ width: "250px" }}>
          <Box
            sx={{
              backgroundColor: lightGrey,
              backgroundImage: `url(${loadedImage.src})`,
              backgroundSize: "210px",
              backgroundPosition: "30px 40px",
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
              {title}
            </Box>
          </Grid>
          <Grid item>
            <Image src={quotationMark} loader={loader} />
            <Box component="p" sx={{ ...bodyLarge, mb: 2 }}>
              {quote}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Link>
  );
};
