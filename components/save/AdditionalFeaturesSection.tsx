import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { AdditionalFeatureItem } from "components/save/AdditionalFeatureItem";
import additionalFeature from "public/images/information-security.svg";

export const AdditionalFeaturesSection: FC = ({ children }) => {
  const t = useTranslate();
  const { lightGrey, white, turquoise, black } = colors;
  const { ps, tl } = breakpoints;
  const [first, ...rest] = children as any[];

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid
        container
        sx={{
          flexDirection: "column",
        }}
      >
        <Grid item>
          <Box sx={{ mb: "120px" }}>{first}</Box>
        </Grid>
        <Grid
          item
          container
          direction="row"
          columnSpacing={8}
          sx={{
            flexDirection: "row",
            [ps]: { flexDirection: "column" },
            [tl]: { flexDirection: "row" },
          }}
        >
          {rest}
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
