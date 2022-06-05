import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { CoreFeatureItem } from "components/save/CoreFeatureItem";
import coreFeature from "images/information-security.svg";
import coreFeaturesBackground from "images/core-features-background.png";

export const CoreFeaturesSection: FC = () => {
  const t = useTranslate();
  const { white, turquoise } = colors;
  const { h2, bodyLarge } = typography;
  const { ps, tl } = breakpoints;

  return (
    <PageSection backgroundColor={white}>
      <Grid container direction="column">
        <Grid
          container
          item
          sx={{
            flexDirection: "row",
            [ps]: { flexDirection: "column" },
            [tl]: { flexDirection: "row" },
          }}
        >
          <Grid
            container
            direction="column"
            item
            sx={{
              width: "50%",
              [ps]: { width: "100%" },
              [tl]: { width: "50%" },
            }}
          >
            <Box
              component="h2"
              sx={{ ...h2 }}
              dangerouslySetInnerHTML={{
                __html: t("coreFeaturesTitle"),
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
            <Box component="p" sx={{ ...bodyLarge }}>
              {t("coreFeaturesDescription")}
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          item
          spacing={8}
          sx={{
            mt: "100px",
            flexDirection: "row",
            [ps]: { flexDirection: "column" },
            [tl]: { flexDirection: "row" },
          }}
        >
          <Grid
            container
            item
            sx={{
              width: "50%",
              flexDirection: "row",
              [ps]: { flexDirection: "column", width: "100%" },
              [tl]: { flexDirection: "row", width: "50%" },
            }}
            spacing={6}
          >
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
                  width: "100%",
                  minHeight: "300px",
                  backgroundColor: turquoise,
                  color: white,
                  p: 3,
                }}
              >
                {t("coreFeaturesIntro")}
              </Box>
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
              [ps]: { width: "100%" },
              [tl]: { width: "50%" },
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: 1000,
                backgroundImage: `url(${coreFeaturesBackground.src})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </PageSection>
  );
};
