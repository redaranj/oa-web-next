import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { typography, colors, breakpoints } from "styles/theme";

interface PersonItemProps {
  backgroundColor: string;
}

export const PersonItem: FC<PersonItemProps> = ({
  backgroundColor,
  children,
}) => {
  const { turquoise } = colors;
  const { bodyLarge } = typography;
  const { ps, tl } = breakpoints;
  const [image, name, jobTitle, ...bio] = children as any[];

  return (
    <Grid item>
      <Box sx={{ backgroundColor, p: 6, pb: 0 }}>
        <Grid
          item
          container
          flexWrap="nowrap"
          spacing={4}
          sx={{
            flexDirection: "row",
            [ps]: { flexDirection: "column" },
            [tl]: { flexDirection: "row" },
          }}
        >
          <Grid
            item
            container
            direction="row"
            sx={{ width: "50%" }}
            flexWrap="nowrap"
            spacing={4}
          >
            <Grid item>
              <Box sx={{ mt: -10 }}>{image}</Box>
            </Grid>
            <Grid item container direction="column">
              {name}
              <Box sx={{ mt: 2, "> p": { color: turquoise } }}>{jobTitle}</Box>
            </Grid>
          </Grid>
          <Grid item container direction="column" sx={{ width: "50%" }}>
            <Grid item>
              <Box component="p" sx={{ ...bodyLarge, pb: 3 }}>
                {bio}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};
