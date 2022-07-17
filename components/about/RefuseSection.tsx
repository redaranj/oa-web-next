import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import refuse1 from "public/images/refuse-1.png";
import refuse2 from "public/images/refuse-2.png";
import target from "public/images/target.svg";

export const RefuseSection: FC = () => {
  const t = useTranslate();
  const { white } = colors;
  const { h2, h6, bodyLarge } = typography;
  const { ps, tl } = breakpoints;

  return (
    <PageSection backgroundColor={white}>
      <Grid container direction="column">
        <Grid
          item
          sx={{
            minHeight: 300,
            backgroundImage: `url(${refuse1.src}), url(${refuse2.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "20% 0%, 80% 100%",
            backgroundSize: "20%, 20%",
          }}
        >
          <Box
            sx={{
              ...h6,
              maxWidth: 600,
              textAlign: "center",
              margin: "auto",
              pt: 16,
              pb: 16,
            }}
          >
            {t("virtualCommons")}
          </Box>
        </Grid>
        <Grid item>
          <Grid item>
            <Box
              component="h2"
              sx={{ ...h2, textAlign: "center", pt: 16 }}
              dangerouslySetInnerHTML={{
                __html: t("refuseToStopTitle"),
              }}
            />
          </Grid>
        </Grid>
        <Grid item container>
          <Grid
            item
            sx={{
              width: "50%",
              [ps]: { width: "100%" },
              [tl]: { width: "50%" },
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${target.src})`,
                backgroundSize: "50%",
                backgroundPosition: "top center",
                backgroundRepeat: "no-repeat",
                height: "100%",
                marginLeft: -4,
              }}
            />
          </Grid>
          <Grid
            item
            sx={{
              width: "50%",
              [ps]: { width: "100%" },
              [tl]: { width: "50%" },
            }}
          >
            <Box
              component="p"
              sx={{ ...bodyLarge, pb: 30 }}
              dangerouslySetInnerHTML={{
                __html: t("refuseToStopDescription"),
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </PageSection>
  );
};
