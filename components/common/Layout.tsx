import { FC, PropsWithChildren } from "react";
import { Grid } from "@mui/material";
import { TopNav } from "./TopNav";

export const Layout: FC<PropsWithChildren<{}>> = ({ children }) => (
  <Grid container direction="column">
    <TopNav />
    <Grid item>{children}</Grid>
  </Grid>
);
