import { FC, PropsWithChildren } from "react";
import { useTranslate } from "react-polyglot";
import { Box, Grid } from "@mui/material";
import { typography, colors, breakpoints } from "styles/theme";

type GettingStartedItemProps = PropsWithChildren<{
  title: string;
  step: string;
}>;

export const GettingStartedItem: FC<GettingStartedItemProps> = ({
  title,
  step,
  children,
}) => {
  const t = useTranslate();
  const { h4, h5, body } = typography;
  const { white, turquoise } = colors;
  const { ps, tl } = breakpoints;

  return (
    <Grid
      item
      sx={{ width: "50%", [ps]: { width: "100%" }, [tl]: { width: "50%" } }}
    >
      <Grid container direction="column" sx={{ backgroundColor: white }}>
        <Grid container item direction="row">
          <Grid item>
            <Box component="h4" sx={{ ...h4, color: turquoise, p: 3 }}>
              {step}
            </Box>
          </Grid>
          <Grid item>
            <Box component="p" sx={{ ...body, pt: 3 }}>
              {t("step")}
            </Box>
          </Grid>
        </Grid>
        <Grid item sx={{ p: 3 }}>
          <Box component="h5" sx={h5}>
            {title}
          </Box>
        </Grid>
        <Grid item sx={{ minHeight: 100 }}>
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
};
