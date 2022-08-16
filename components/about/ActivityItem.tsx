import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints } from "styles/theme";
import { loadImage } from "lib/frontendHelpers";

export const ActivityItem: FC = ({ children }) => {
  const { white } = colors;
  const { ps, tl } = breakpoints;
  const [first, ...rest] = children as any[];
  const image = loadImage(first);

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
  );
};
