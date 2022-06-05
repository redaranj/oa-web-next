import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { ActivityItem } from "components/about/ActivityItem";
import activities1 from "images/activities-1.png";
import activities2 from "images/activities-2.png";
import activities3 from "images/activities-3.png";
import activities4 from "images/activities-4.png";
import activities5 from "images/activities-5.png";

export const ActivitiesSection: FC = () => {
  const t = useTranslate();
  const { lightGrey } = colors;
  const { h2 } = typography;
  const { ps, tl } = breakpoints;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid
        container
        sx={{
          flexDirection: "column",
        }}
      >
        <Grid item>
          <Box
            component="h2"
            sx={{ ...h2, pt: 12 }}
            dangerouslySetInnerHTML={{
              __html: t("soThatWeTitle"),
            }}
          />
        </Grid>
        <Grid
          item
          container
          columnSpacing={6}
          rowSpacing={6}
          alignItems="flex-end"
          sx={{
            flexDirection: "row",
            [ps]: { flexDirection: "column" },
            [tl]: { flexDirection: "row" },
          }}
        >
          <ActivityItem
            title={t("developSave")}
            url=""
            image={activities1}
            height={600}
          />
          <ActivityItem
            title={t("conductResearch")}
            url=""
            image={activities2}
            height={500}
          />
          <ActivityItem
            title={t("prepareReports")}
            url=""
            image={activities3}
            height={600}
          />
        </Grid>
        <Grid
          item
          container
          direction="row"
          columnSpacing={6}
          rowSpacing={6}
          alignItems="flex-start"
          sx={{ pt: 6, pb: 16 }}
        >
          <ActivityItem
            title={t("archiving")}
            url=""
            image={activities4}
            height={500}
          />
          <ActivityItem
            title={t("documentaryActivities")}
            url=""
            image={activities5}
            height={600}
          />
        </Grid>
      </Grid>
    </PageSection>
  );
};
