import { FC } from "react";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { breakpoints, colors } from "styles/theme";
import { loadImage, getURL } from "lib/frontendHelpers";

export const PartnerItem: FC = ({ children }) => {
  const { ps, tl } = breakpoints;
  const { turquoise } = colors;
  const [first, second] = children as any[];
  const url = getURL(second);
  const image = loadImage(first);

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
              width: "100%",
              height: "100%",
              backgroundImage: `url(${image.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              ":hover": {
                background: `linear-gradient(to top, ${turquoise}bb, ${turquoise}bb), url(${image.src}) center / cover`,
              },
            }}
          />
        </Link>
      </Grid>
    </Grid>
  );
};
