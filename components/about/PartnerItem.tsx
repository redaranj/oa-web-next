import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { breakpoints, loader, colors } from "styles/theme";
import { loadImage, getURL } from "lib/frontendHelpers";

export const PartnerItem: FC = ({ children }) => {
  const { ps, tl } = breakpoints;
  const { turquoise } = colors;
  const [first, second, ...rest] = children as any[];
  const url = getURL(second);
  const image = loadImage(first);
  const name = rest as unknown as string;

  return (
    <Grid
      item
      container
      direction="column"
      sx={{ width: "33%", [ps]: { width: "100%" }, [tl]: { width: "33%" } }}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item sx={{ cursor: "pointer" }}>
        <Link href={url}>
          <Box
            sx={{
              position: "relative",
              ":hover": {
                background: `linear-gradient(to top, ${turquoise}bb, ${turquoise}bb), url(${image.src}) center / cover`,
              },
            }}
          >
            <Image src={image} alt={name} loader={loader} objectFit="contain" />
          </Box>
        </Link>
      </Grid>
    </Grid>
  );
};
