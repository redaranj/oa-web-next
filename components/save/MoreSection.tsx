import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { MoreItem } from "components/save/MoreItem";
import guideSample from "images/guide-sample.png";

export const MoreSection: FC = () => {
  const t = useTranslate();
  const { white } = colors;
  const { h2, bodyLarge } = typography;

  return (
    <PageSection backgroundColor={white}>
      <Grid
        container
        spacing={8}
        sx={{
          flexDirection: "column",
        }}
      >
        <Grid item>
          <Box
            component="h2"
            sx={{ ...h2, textAlign: "center" }}
            dangerouslySetInnerHTML={{
              __html: t("moreAboutSaveTitle"),
            }}
          />
        </Grid>
        <Grid item>
          <Box component="p" sx={{ ...bodyLarge, textAlign: "center" }}>
            {t("moreAboutSaveDescription")}
          </Box>
        </Grid>
        <Grid item container direction="row">
          <MoreItem
            title={t("pressRelease")}
            description=""
            image={guideSample}
            url=""
          />
          <MoreItem
            title={t("guide")}
            description=""
            image={guideSample}
            url=""
          />
          <MoreItem
            title={t("video")}
            description=""
            image={guideSample}
            url=""
          />
        </Grid>
      </Grid>
    </PageSection>
  );
};
