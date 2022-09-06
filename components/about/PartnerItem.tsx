import { FC } from "react";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { breakpoints, colors } from "styles/theme";
import { loadImage, getURL } from "lib/frontendHelpers";

export const PartnerItem: FC = ({ children }) => {
  const { ps, tl } = breakpoints;
  const { white, turquoise } = colors;
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
      <Grid item sx={{ cursor: "pointer", width: "100%", height: 180 }}>
        <Link href={url} passHref>
          <Box component="a" target="_blank">
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                backgroundImage: `url(${image.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: `1px solid ${white}`,
                ":hover": {
                  border: `1px solid ${turquoise}`,
                },
              }}
            />
          </Box>
        </Link>
      </Grid>
    </Grid>
  );
};
