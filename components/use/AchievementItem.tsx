import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { colors } from "styles/theme";

export const AchievementItem: FC = ({ children }) => {
  const { white } = colors;
  
  return (
    <Grid item xs={4}>
      <Box sx={{ backgroundColor: white }}>{children}</Box>
    </Grid>
  );
};
