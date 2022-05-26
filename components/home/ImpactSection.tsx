import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { ImpactItem } from "components/home/ImpactItem";
import informationSecurity from "images/information-security.svg";
import freeSpeech from "images/free-speech.svg";
import freeUniversalAccess from "images/free-universal-access.svg";
import dataProcessingSpeed from "images/data-processing-speed.svg";

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
            image={informationSecurity}
          />
          <ImpactItem
            title={t("freeSpeechTitle")}
            description={t("freeSpeechDescription")}
            image={freeSpeech}
          />
          <ImpactItem
            title={t("freeUniversalAccessTitle")}
            description={t("freeUniversalAccessDescription")}
            image={freeUniversalAccess}
          />
          <ImpactItem
            title={t("dataProcessingSpeedTitle")}
            description={t("dataProcessingSpeedDescription")}
            image={dataProcessingSpeed}
          />
        </Grid>
      </Grid>
    </PageSection>
  );
};
