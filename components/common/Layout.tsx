import { FC } from "react";
import { Grid } from "@mui/material";
import { TopBar } from "./TopBar";

export const Layout: FC = ({ children }) => (
  <Grid container direction="column">
    <TopBar />
    <Grid item>{children}</Grid>
  </Grid>
);
