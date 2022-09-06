import { FC } from "react";
import { Box, Grid } from "@mui/material";

export const DonateDescription: FC = ({ children }) => (
  <Grid
    container
    justifyContent="space-around"
    sx={{
      flexDirection: "column",
    }}
  >
    <Grid item>
      <Box sx={{ hr: { mb: 3 } }}>{children}</Box>
    </Grid>
  </Grid>
);
