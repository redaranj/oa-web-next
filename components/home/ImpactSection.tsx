import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { ImpactItem } from "components/home/ImpactItem";

export const ImpactSection: FC = () => {
  const t = useTranslate();
  const { h2 } = typography;
  const { white } = colors;

  return (
    <PageSection backgroundColor={white}>
      <Grid
        container
        direction="column"
        sx={{ paddingTop: "50px", paddingBottom: "50px" }}
      >
        <Grid item>
          <Box
            component="h2"
            sx={h2}
            dangerouslySetInnerHTML={{ __html: t("ourImpactTitle") }}
          />
        </Grid>
        <Grid item container direction="row" spacing={2}>
          <ImpactItem
            title={t("informationSecurityTitle")}
            description={t("informationSecurityDescription")}
            image="information-security.svg"
          />
          <ImpactItem
            title={t("freeSpeechTitle")}
            description={t("freeSpeechDescription")}
            image="free-speech.svg"
          />
          <ImpactItem
            title={t("freeUniversalAccessTitle")}
            description={t("freeUniversalAccessDescription")}
            image="free-universal-access.svg"
          />
          <ImpactItem
            title={t("dataProcessingSpeedTitle")}
            description={t("dataProcessingSpeedDescription")}
            image="data-processing-speed.svg"
          />
        </Grid>
      </Grid>
    </PageSection>
  );
};
