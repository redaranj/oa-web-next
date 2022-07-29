import { FC } from "react";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { typography, breakpoints } from "styles/theme";

export const ImpactItem: FC = ({ children }) => {
  const { h5, bodyLarge } = typography;
  const { tl, pl, ps } = breakpoints;
  const [first, title, ...description] = children as any[];
  const image =
    require(`public/images/${first.props.children.props.src}`).default;

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
        <Image
          src={image}
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
