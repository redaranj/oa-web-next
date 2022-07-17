import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { ImpactItem } from "components/home/ImpactItem";
import informationSecurity from "public/images/information-security.svg";
import freeSpeech from "public/images/free-speech.svg";
import freeUniversalAccess from "public/images/free-universal-access.svg";
import dataProcessingSpeed from "public/images/data-processing-speed.svg";

export const ImpactSection: FC = () => {
  const t = useTranslate();
  const { h2 } = typography;
  const { white } = colors;

  return (
    <PageSection backgroundColor={white}>
      <Grid container direction="column">
        <Grid item>
          <Box
            component="h2"
            sx={{ ...h2, textAlign: "center" }}
            dangerouslySetInnerHTML={{ __html: t("ourImpactTitle") }}
          />
        </Grid>
        <Grid item container direction="row" spacing={6} sx={{ pt: 1 }}>
          <ImpactItem
            title={t("bolsterFreedomTitle")}
            description={t("bolsterFreedomDescription")}
            image={informationSecurity}
          />
          <ImpactItem
            title={t("empowerCommunitiesTitle")}
            description={t("empowerCommunitiesDescription")}
            image={freeSpeech}
          />
          <ImpactItem
            title={t("protectSourcesTitle")}
            description={t("protectSourcesDescription")}
            image={freeUniversalAccess}
          />
          <ImpactItem
            title={t("createStandardsTitle")}
            description={t("createStandardsDescription")}
            image={dataProcessingSpeed}
          />
        </Grid>
      </Grid>
    </PageSection>
  );
};
