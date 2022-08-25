import { FC } from "react";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { typography, breakpoints, loader } from "styles/theme";
import { loadImage } from "lib/frontendHelpers";

export const AcronymItem: FC = ({ children }) => {
  const { bodyLarge } = typography;
  const { ps, tl } = breakpoints;
  const [first, title, ...description] = children as any[];
  const image = loadImage(first);

  return (
    <Grid item container direction="column" spacing={0}>
      <Grid item>
        <Box sx={{ textAlign: "center", "> h2": { mb: 3 } }}>{title}</Box>
      </Grid>
      <Grid
        item
        container
        direction="row"
        flexWrap="nowrap"
        sx={{
          flexDirection: "row",
          [ps]: { flexDirection: "column" },
          [tl]: { flexDirection: "row" },
        }}
      >
        <Grid
          container
          item
          sx={{ width: "50%", [ps]: { width: "100%" }, [tl]: { width: "50%" } }}
          direction="column"
          justifyContent="center"
        >
          <Grid item>
            <Box sx={{ "> p": bodyLarge }}>{description}</Box>
          </Grid>
        </Grid>
        <Grid
          container
          item
          sx={{
            width: "50%",
            [ps]: { width: "100%" },
            [tl]: { width: "50%" },
            overflow: "visible",
          }}
          justifyContent="flex-end"
        >
          <Grid item>
            <Box
              sx={{
                width: "90%",
                margin: "0 auto",
              }}
            >
              <Image src={image} alt="" loader={loader} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
