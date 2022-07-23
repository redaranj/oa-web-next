import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const PartnersSection: FC = ({ children }) => {
  const t = useTranslate();
  const { white } = colors;
  const { h5 } = typography;
  const { ps, tl } = breakpoints;
  const [title, team, board, ...rest] = children as any[];

  return (
    <PageSection backgroundColor={white}>
      <Grid
        container
        sx={{
          flexDirection: "column",
        }}
      >
        <Grid item>
          <Box sx={{ textAlign: "center" }}>{title}</Box>
        </Grid>
        <Grid item>{team}</Grid>
        <Grid item>{board}</Grid>
        <Grid item container direction="column">
          <Grid item>
            <Box
              component="h5"
              sx={{ ...h5, textAlign: "center", mt: 12, mb: 6 }}
            >
              {t("partners")}
            </Box>
          </Grid>
          <Grid
            item
            container
            sx={{
              pb: 8,
              flexDirection: "row",
              [ps]: { flexDirection: "column" },
              [tl]: { flexDirection: "row" },
            }}
          >
            {rest}
          </Grid>
        </Grid>
      </Grid>
    </PageSection>
  );
};
