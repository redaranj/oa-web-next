import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors, breakpoints } from "styles/theme";

export const DetailItem: FC = ({ children }) => {
  const t = useTranslate();
  const { white } = colors;
  const { h2 } = typography;
  const { ps, tl } = breakpoints;

  return (
    <Box sx={{ backgroundColor: white }}>
      <Grid
        container
        sx={{
          flexDirection: "row",
        }}
      >
        {children}
      </Grid>
    </Box>
  );
};
