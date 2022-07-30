import { FC } from "react";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { colors, typography, breakpoints } from "styles/theme";
import { loadImage, getURL } from "lib/frontendHelpers";

export const ProjectItem: FC = ({ children }) => {
  const { white, turquoise } = colors;
  const { bodyLarge } = typography;
  const { ps, ts } = breakpoints;
  const [first, title, description, last] = children as any[];
  const image = loadImage(first);
  const url = getURL(last);

  return (
    <Grid
      item
      container
      direction="column"
      sx={{
        width: "33%",
        overflow: "hidden",
        [ps]: { width: "100%" },
        [ts]: { width: "33%" },
      }}
    >
      <Link href={url}>
        <Box
          sx={{
            backgroundColor: white,
            "&:hover #slide": {
              transition: "1s",
              bottom: "0px",
            },
            position: "relative",
          }}
        >
          <Grid item container direction="row" justifyContent="space-between">
            <Grid item>
              <Box sx={{ p: 3 }}>{title}</Box>
            </Grid>
            <Grid item />
          </Grid>
          <Grid item>
            <Box
              sx={{
                height: "400px",
                backgroundImage: `url(${image.src})`,
                backgroundSize: "cover",
              }}
            >
              <Box
                id="slide"
                sx={{
                  width: "100%",
                  backgroundColor: turquoise,
                  color: white,
                  height: "300px",
                  position: "absolute",
                  bottom: "-300px",
                  transition: "1s",
                }}
              >
                <Box sx={{ ...bodyLarge, color: white, p: 6 }}>
                  {description}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Link>
    </Grid>
  );
};
