import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { VisionItem } from "components/team/VisionItem";
import visionBackground from "images/vision-background.png";

export const VisionSection: FC = () => {
  const t = useTranslate();
  const { white } = colors;
  const { h2 } = typography;

  return (
    <PageSection backgroundColor={white} backgroundImage={visionBackground}>
      <Grid container direction="column" item sx={{ minHeight: 400 }}>
        <Grid item>
          <Box
            component="h2"
            sx={{ ...h2, color: white, textAlign: "center" }}
            dangerouslySetInnerHTML={{
              __html: t("ourSharedVisionTitle"),
            }}
          />
        </Grid>
        <Grid item container direction="row" spacing={3}>
          <VisionItem title={t("addMetadata")} number={t("01")} />
          <VisionItem title={t("flagSignificantContent")} number={t("02")} />
          <VisionItem title={t("addMetadata")} number={t("03")} />
          <VisionItem title={t("flagSignificantContent")} number={t("04")} />
        </Grid>
      </Grid>
    </PageSection>
  );
};
