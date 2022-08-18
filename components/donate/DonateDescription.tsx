import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { typography } from "styles/theme";

export const DonateDescription: FC = ({ children }) => {
  const { outlinedButton } = typography;
  const last = (children as any[]).slice(-1);
  const rest = (children as any[]).slice(0, -1);

  return (
    <Grid
      container
      justifyContent="space-around"
      sx={{
        flexDirection: "column",
      }}
    >
      <Grid item>
        <Box sx={{ hr: { mb: 3 } }}>{rest}</Box>
      </Grid>
      <Grid item>
        <Box sx={{ a: outlinedButton }}>{last}</Box>
      </Grid>
    </Grid>
  );
};
