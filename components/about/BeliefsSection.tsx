import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import fist from "images/fist.svg";

export const BeliefsSection: FC = () => {
  const t = useTranslate();
  const { lightGrey, lightBurgundy } = colors;
  const { h2, h5, bodyLarge } = typography;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid container direction="column">
        <Grid
          item
          container
          spacing={8}
          sx={{
            flexDirection: "row",
          }}
        >
          <Grid
            item
            sx={{
              width: "50%",
              backgroundImage: `url(${fist.src})`,
              backgroundSize: "150px",
              backgroundPosition: "0% 0%",
              backgroundRepeat: "no-repeat",
            }}
          />
          <Grid
            container
            direction="column"
            item
            sx={{
              width: "50%",
            }}
          >
            <Grid item>
              <Box
                component="h2"
                sx={h2}
                dangerouslySetInnerHTML={{
                  __html: t("weBelieveTitle"),
                }}
              />
            </Grid>
            <Grid item>
              <Box component="p" sx={bodyLarge}>
                {t("weBelieveDescription")}
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Box
            sx={{ color: lightBurgundy, fontSize: "150px", fontWeight: 600 }}
          >
            {t("weAreDoing")}
          </Box>
        </Grid>
        <Grid item>
          <Box sx={h5}>{t("virtualCommons")}</Box>
        </Grid>
        <Grid item>
          <Grid item>
            <Box
              component="h2"
              sx={{ ...h2, textAlign: "center" }}
              dangerouslySetInnerHTML={{
                __html: t("refuseToStopTitle"),
              }}
            />
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item sx={{ width: "50%" }} />
          <Grid item sx={{ width: "50%" }}>
            <Box
              component="p"
              sx={bodyLarge}
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
