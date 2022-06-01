import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { AdditionalFeatureItem } from "components/save/AdditionalFeatureItem";
import additionalFeature from "images/information-security.svg";

export const AdditionalFeaturesSection: FC = () => {
  const t = useTranslate();
  const { lightGrey, white, turquoise, black } = colors;
  const { h2 } = typography;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid
        container
        spacing={8}
        sx={{
          flexDirection: "column",
          pb: 24,
        }}
      >
        <Grid item>
          <Box
            component="h2"
            sx={h2}
            dangerouslySetInnerHTML={{
              __html: t("additionalFeaturesTitle"),
            }}
          />
        </Grid>
        <Grid item container direction="row" columnSpacing={8}>
          <AdditionalFeatureItem
            title={t("addMetadata")}
            description=""
            image={additionalFeature}
            backgroundColor={white}
            textColor={black}
          />
          <AdditionalFeatureItem
            title={t("flagSignificantContent")}
            description=""
            image={additionalFeature}
            backgroundColor={turquoise}
            textColor={white}
          />
        </Grid>
      </Grid>
    </PageSection>
  );
};
