import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints, loader, typography } from "styles/theme";
import { loadImage } from "lib/frontendHelpers";
import rightArrow from "public/images/right-arrow.svg";

export const ActivityItem: FC<PropsWithChildren> = ({ children }) => {
  const { white, turquoise } = colors;
  const { bodyLarge } = typography;
  const { ps, tl } = breakpoints;
  const [first, title, ...rest] = children as any[];
  const image = loadImage(first);

  return (
    <Grid
      item
      container
      direction="column"
      sx={{
        width: "50%",
        overflow: "hidden",
        [ps]: { width: "100%" },
        [tl]: { width: "50%" },
        a: { textDecoration: "none" },
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
      <Link href="/">
        <Box
          sx={{
            backgroundColor: white,
            "&:hover #slide": {
              transition: "0.5s",
              bottom: "0px",
            },
            position: "relative",
            cursor: "pointer",
            overflow: "hidden",
          }}
        >
          <Grid item container direction="row" justifyContent="space-between">
            <Grid item xs={10}>
              <Box sx={{ p: 3 }}>{title}</Box>
            </Grid>
            <Grid item xs={2}>
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
                  bottom: "-300px",
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
                  {rest}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Link>
    </Grid>
  );
  /*
  return (
    <Grid
      item
      sx={{
        width: "33%",
        [ps]: { width: "100%" },
        [tl]: { width: "33%" },
      }}
    >
      <Box
        sx={{
          height: 350,
          backgroundImage: `url(${image.src})`,
          backgroundSize: "cover",
        }}
      >
        <Grid item container direction="column-reverse" sx={{ height: "100%" }}>
          <Grid item>
            <Box sx={{ h5: { color: white }, pl: 3, pb: 1 }}>{rest}</Box>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  ); */
};
