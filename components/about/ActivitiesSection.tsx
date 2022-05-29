import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { ActivityItem } from "components/about/ActivityItem";
import guideSample from "images/guide-sample.png";

export const ActivitiesSection: FC = () => {
  const t = useTranslate();
  const { lightGrey } = colors;
  const { h2 } = typography;

  return (
    <PageSection backgroundColor={lightGrey}>
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
            sx={h2}
            dangerouslySetInnerHTML={{
              __html: t("soThatWeTitle"),
            }}
          />
        </Grid>
        <Grid item container direction="row">
          <ActivityItem
            title={t("developSave")}
            description=""
            url=""
            image={guideSample}
          />
          <ActivityItem
            title={t("conductResearch")}
            description=""
            url=""
            image={guideSample}
          />
          <ActivityItem
            title={t("prepareReports")}
            description=""
            url=""
            image={guideSample}
          />
          <ActivityItem
            title={t("archiving")}
            description=""
            url=""
            image={guideSample}
          />
          <ActivityItem
            title={t("documentaryActivities")}
            description=""
            url=""
            image={guideSample}
          />
        </Grid>
      </Grid>
    </PageSection>
  );
};
