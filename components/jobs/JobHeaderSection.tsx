import { FC } from "react";
import { Grid, Box } from "@mui/material";
import { colors, typography } from "styles/theme";
import { HeaderSection as BaseHeaderSection } from "components/common/HeaderSection";

export const JobHeaderSection: FC = ({ children }) => {
  const { lightGrey, darkGrey, turquoise } = colors;
  const { body } = typography;
  const [first, ...rest] = children as any[];

  return (
    <BaseHeaderSection backgroundColor={lightGrey}>
      <Grid container direction="column">
        <Grid item>
          <Box component="p" sx={{ ...body, color: darkGrey }}>
            All vacancies
          </Box>
        </Grid>
        <Grid item container direction="row" spacing={3}>
          <Grid item>
            <Box component="p" sx={{ color: darkGrey }}>
              {first}
            </Box>
          </Grid>
          <Grid item>
            <Box component="p" sx={{ color: turquoise }}>
              Job Opening
            </Box>
          </Grid>
        </Grid>
        <Grid item>
          <Box sx={{ "> h2": { color: turquoise } }}>{rest}</Box>
        </Grid>
      </Grid>
    </BaseHeaderSection>
  );
};
