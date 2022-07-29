import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { typography, breakpoints } from "styles/theme";
import { getImagePath } from "lib/frontendHelpers";

export const ImpactItem: FC = ({ children }) => {
  const { h5, bodyLarge } = typography;
  const { tl, pl, ps } = breakpoints;
  const [first, title, ...description] = children as any[];
  const image = first.props.children.props.src;

  return (
    <Grid
      item
      container
      direction="column"
      sx={{
        width: "25%",
        [ps]: {
          width: "100%",
        },
        [pl]: {
          width: "50%",
        },
        [tl]: {
          width: "25%",
        },
      }}
    >
      <Grid item>
        <img
          src={getImagePath(image)}
          alt=""
          width="50px"
          style={{ marginBottom: "8px" }}
        />
      </Grid>
      <Grid item>
        <Box component="h5" sx={h5}>
          {title}
        </Box>
      </Grid>
      <Grid item>
        <Box component="p" sx={bodyLarge}>
          {description}
        </Box>
      </Grid>
    </Grid>
  );
};
