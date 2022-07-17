import { FC } from "react";
import { Grid } from "@mui/material";

export const DonateDescription: FC = ({ children }) => (
  <Grid
    container
    justifyContent="space-around"
    sx={{
      flexDirection: "column",
    }}
  >
    <Grid item>{children}</Grid>
  </Grid>
);
