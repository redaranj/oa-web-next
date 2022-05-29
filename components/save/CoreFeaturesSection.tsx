import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { CoreFeatureItem } from "components/save/CoreFeatureItem";
import coreFeature from "images/information-security.svg";

export const CoreFeaturesSection: FC = () => {
  const t = useTranslate();
  const { white, turquoise } = colors;
  const { h2, bodyLarge } = typography;

  return (
    <PageSection backgroundColor={white}>
      <Grid container direction="column">
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
              sx={h2}
              dangerouslySetInnerHTML={{
                __html: t("coreFeaturesTitle"),
              }}
            />
          </Grid>
          <Grid
            item
            sx={{
              width: "50%",
            }}
          >
            <Box component="p" sx={bodyLarge}>
              {t("coreFeaturesDescription")}
            </Box>
          </Grid>
        </Grid>
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
            direction="row"
            item
            sx={{
              width: "50%",
            }}
          >
            <Grid
              item
              sx={{ width: "50%", backgroundColor: turquoise, color: white }}
            >
              {t("coreFeaturesIntro")}
            </Grid>
            <CoreFeatureItem
              title={t("sendMediaSecureTitle")}
              description=""
              image={coreFeature}
            />
            <CoreFeatureItem
              title={t("preserveMobileMediaTitle")}
              description=""
              image={coreFeature}
            />
            <CoreFeatureItem
              title={t("communicateIntentionsTitle")}
              description=""
              image={coreFeature}
            />
            <CoreFeatureItem
              title={t("simplifyWorkflowsTitle")}
              description=""
              image={coreFeature}
            />
          </Grid>
          <Grid
            item
            sx={{
              width: "50%",
            }}
          />
        </Grid>
      </Grid>
    </PageSection>
  );
};
