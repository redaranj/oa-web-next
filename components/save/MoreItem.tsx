import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints, loader } from "styles/theme";
import { loadImage } from "lib/frontendHelpers";
import rightArrow from "public/images/right-arrow.svg";

export const MoreItem: FC = ({ children }) => {
  const { lightGrey } = colors;
  const { ps, tl } = breakpoints;
  const [first, title, url] = children as any[];
  const image = loadImage(first);

  return (
    <Grid
      item
      sx={{ width: "33%", [ps]: { width: "100%" }, [tl]: { width: "33%" } }}
    >
      <Link href={url}>
        <Grid container direction="column" sx={{ backgroundColor: lightGrey }}>
          <Grid item container direction="row" justifyContent="space-between">
            <Grid item>
              <Box sx={{ width: "100%", backgroundColor: lightGrey, p: 3 }}>
                {title}
              </Box>
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
                height: "300px",
                width: "100%",
                backgroundImage: `url(${image.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                p: 3,
              }}
            />
          </Grid>
        </Grid>
      </Link>
    </Grid>
  );
};
