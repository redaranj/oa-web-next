import { FC } from "react";
import { useTranslate } from "react-polyglot";
import { Box, Grid } from "@mui/material";
import { typography, colors, breakpoints } from "styles/theme";

export const GettingStartedItem: FC = ({ children }) => {
  const t = useTranslate();
  const { body } = typography;
  const { white } = colors;
  const { ps, tl } = breakpoints;

  return (
    <Grid
      item
      flexGrow={1}
      sx={{ width: "50%", [ps]: { width: "100%" }, [tl]: { width: "50%" } }}
    >
      <Grid
        container
        direction="column"
        sx={{ backgroundColor: white, p: 3, height: "100%" }}
      >
        <Grid container item direction="row" spacing={1} alignItems="center">
          <Grid item>
            <Box className="step" />
          </Grid>
          <Grid item>
            <Box component="p" sx={{ ...body }}>
              {t("step")}
            </Box>
          </Grid>
        </Grid>
        <Grid item>
          <Box>{children}</Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
