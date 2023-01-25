import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import { Box, Grid } from "@mui/material";
import { OutlinedButton } from "components/common/OutlinedButton";
import { colors, loader, typography, breakpoints } from "styles/theme";
import plus from "public/images/plus.svg";
import quotationMark from "public/images/quote.svg";

type WhoItemProps = PropsWithChildren<{
  name: string;
  title: string;
  quote: string;
  path: string;
  image: string;
}>;

export const WhoItem: FC<WhoItemProps> = ({
  name,
  title,
  quote,
  path,
  image,
}) => {
  const { lightGrey, black } = colors;
  const { h5, body, bodyLarge } = typography;
  const { ps, ts } = breakpoints;
  const loadedImage = require(`public/images/${image}`).default;

  return (
    <Link href={path}>
      <Grid
        item
        container
        sx={{
          height: "100%",
          flexDirection: "row",
          flexWrap: "nowrap",
          [ps]: {
            flexDirection: "column",
            flexWrap: "wrap",
          },
          [ts]: {
            flexDirection: "row",
            flexWrap: "nowrap",
          },
          backgroundColor: lightGrey,
          cursor: "pointer",
        }}
      >
        <Grid item>
          <Box
            sx={{
              width: 250,
              mt: 6,
              ml: 6,
            }}
          >
            <Image src={loadedImage} alt={name} loader={loader} />
          </Box>
        </Grid>
        <Grid
          container
          direction="column"
          wrap="nowrap"
          item
          sx={{
            width: "70%",
            backgroundColor: "transparent",
            p: 6,
            [ps]: { width: "100%", p: 2 },
            [ts]: { width: "70%", p: 6 },
          }}
        >
          <Grid item container direction="row" spacing={2} alignItems="center">
            <Grid item>
              <Box component="h5" sx={{ ...h5 }}>
                {name}
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ mt: -1 }}>
                <Image src={plus} alt="" loader={loader} />
              </Box>
            </Grid>
          </Grid>
          <Grid item>
            <Box component="p" sx={{ ...body, mb: 4 }}>
              {title}
            </Box>
          </Grid>
          <Grid item sx={!quote ? {display: "none"} : {}}>
            <Image src={quotationMark} alt="" loader={loader} />
            <Box component="p" sx={{ ...bodyLarge, mb: 2 }}>
              {quote}
            </Box>
          </Grid>
          <Grid item sx={{ pt: 3 }}>
            <OutlinedButton textColor={black} arrowDirection="right">
              More
            </OutlinedButton>
          </Grid>
        </Grid>
      </Grid>
    </Link>
  );
};
