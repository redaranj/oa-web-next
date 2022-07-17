import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { typography, colors, breakpoints } from "styles/theme";
import { OutlinedButton } from "components/common/OutlinedButton";

interface PersonItemProps {
  backgroundColor: string;
}

export const PersonItem: FC<PersonItemProps> = ({
  backgroundColor,
  children,
}) => {
  const { turquoise } = colors;
  const { h6, bodyLarge, body } = typography;
  const { ps, tl } = breakpoints;
  const [image, name, jobTitle, ...bio] = children as any[];

  return (
    <Grid item>
      <Box sx={{ backgroundColor, p: 6 }}>
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
            <Grid item>{image}</Grid>
            <Grid item container direction="column">
              <Box component="h6" sx={h6}>
                {name}
              </Box>
              <Box component="p" sx={{ ...body, color: turquoise }}>
                {jobTitle}
              </Box>
            </Grid>
          </Grid>
          <Grid item container direction="column">
            <Grid item>
              <Box component="p" sx={{ ...bodyLarge, pb: 3 }}>
                {bio}
              </Box>
            </Grid>
            <Grid item>
              <OutlinedButton arrowDirection="down">More</OutlinedButton>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};
