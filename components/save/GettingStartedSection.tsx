import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { GettingStartedItem } from "components/save/GettingStartedItem";

export const GettingStartedSection: FC = () => {
  const t = useTranslate();
  const { lightGrey } = colors;
  const { h2, h6, bodyLarge } = typography;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid container direction="column" sx={{ pb: 20 }}>
        <Grid
          container
          item
          spacing={8}
          sx={{
            flexDirection: "row",
          }}
        >
          <Grid
            container
            direction="column"
            item
            sx={{
              width: "50%",
            }}
          >
            <Box
              component="h2"
              sx={{ ...h2, mt: 16 }}
              dangerouslySetInnerHTML={{
                __html: t("gettingStartedTitle"),
              }}
            />
          </Grid>
          <Grid
            item
            sx={{
              width: "50%",
            }}
          >
            <Box component="p" sx={{ ...bodyLarge, mt: 16, mb: 16 }}>
              {t("gettingStartedDescription")}
            </Box>
          </Grid>
        </Grid>
        <Grid item>
          <Box component="h6" sx={{ ...h6, mb: 6 }}>
            {t("threeEasySteps")}
          </Box>
        </Grid>
        <Grid
          container
          item
          spacing={8}
          sx={{
            flexDirection: "row",
          }}
        >
          <GettingStartedItem title={t("downloadSave")} step="01" />
          <GettingStartedItem title={t("downloadOrbot")} step="02" />
          <GettingStartedItem title={t("watchTutorials")} step="03" />
        </Grid>
      </Grid>
    </PageSection>
  );
};
