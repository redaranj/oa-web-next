import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import fist from "images/fist.svg";

export const BeliefsSection: FC = () => {
  const t = useTranslate();
  const { white } = colors;
  const { h2, bodyLarge } = typography;
  const { ps, tl } = breakpoints;

  return (
    <PageSection backgroundColor={white}>
      <Grid container direction="column">
        <Grid
          item
          container
          spacing={8}
          sx={{
            flexDirection: "row",
            [ps]: {
              flexDirection: "column",
            },
            [tl]: {
              flexDirection: "row",
            },
          }}
        >
          <Grid
            item
            sx={{
              width: "50%",
              [ps]: {
                width: "100%",
              },
              [tl]: {
                width: "50%",
              },
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${fist.src})`,
                backgroundSize: "25%",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                height: "100%",
                marginLeft: -4,
              }}
            />
          </Grid>
          <Grid
            container
            direction="column"
            item
            sx={{
              width: "50%",
              [ps]: {
                width: "100%",
              },
              [tl]: {
                width: "50%",
              },
            }}
          >
            <Grid item>
              <Box
                component="h2"
                sx={{ ...h2, pt: 16 }}
                dangerouslySetInnerHTML={{
                  __html: t("weBelieveTitle"),
                }}
              />
            </Grid>
            <Grid item>
              <Box component="p" sx={{ ...bodyLarge, pb: 12, width: "80%" }}>
                {t("weBelieveDescription")}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PageSection>
  );
};
