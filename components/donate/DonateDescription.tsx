import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";

export const DonateDescription: FC = ({ children }) => {
  const t = useTranslate();
  const { white, turquoise } = colors;
  const { h1 } = typography;

  return (
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
};
