import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { colors, typography, breakpoints, loader } from "styles/theme";
import { loadImage, getURL } from "lib/frontendHelpers";
import rightArrow from "public/images/right-arrow.svg";

export const ProjectItem: FC<PropsWithChildren> = ({ children }) => {
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
        "&:hover": {
          "& h5": {
            color: turquoise,
          },
          "& img": {
            filter:
              "brightness(0) saturate(100%) invert(47%) sepia(82%) saturate(4262%) hue-rotate(155deg) brightness(99%) contrast(101%)",
          },
        },
      }}
    >
      <Link href={url}>
        <Box
          sx={{
            backgroundColor: white,
            "&:hover #slide": {
              transition: "0.5s",
              bottom: "0px",
            },
            position: "relative",
            cursor: "pointer",
          }}
        >
          <Grid item container direction="row" justifyContent="space-between">
            <Grid item>
              <Box sx={{ p: 3 }}>{title}</Box>
            </Grid>
            <Grid item>
              <Box sx={{ px: 3, py: 5 }}>
                <Image
                  src={rightArrow}
                  alt=""
                  loader={loader}
                  width={20}
                  height={20}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid item>
            <Box
              sx={{
                height: "280px",
                backgroundImage: `url(${image.src})`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom center",
              }}
            >
              <Box
                id="slide"
                sx={{
                  width: "100%",
                  backgroundColor: turquoise,
                  color: white,
                  height: "280px",
                  position: "absolute",
                  bottom: "-280px",
                  transition: "1.5s",
                }}
              >
                <Box
                  sx={{
                    "> p": { ...bodyLarge, color: white },
                    strong: { color: "white !important" },
                    p: 3,
                  }}
                >
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
