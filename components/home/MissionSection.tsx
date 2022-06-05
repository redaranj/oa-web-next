import { FC } from "react";
import { Grid, Typography } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { PageSection } from "components/common/PageSection";
import { OutlinedButton } from "components/common/OutlinedButton";
import mission1 from "images/mission-1.png";
import mission2 from "images/mission-2.png";

export const MissionSection: FC = () => {
  const t = useTranslate();

  return (
    <PageSection backgroundColor="gray.light">
      <Grid
        container
        sx={{
          flexDirection: { ps: "column", pl: "row" },
        }}
      >
        <Grid
          item
          sx={{
            width: { ps: "100%", pl: "50%" },
            position: "relative",
            overflow: "visible",
            ":before": {
              content: "''",
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              minHeight: 500,
              width: "100%",
              backgroundImage: `url(${mission1.src}), url(${mission2.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "500px",
              backgroundPosition: "0px 70px, 80px 300px",
              zIndex: 100,
            },
          }}
        />
        <Grid
          item
          container
          direction="column"
          sx={{
            width: { ps: "100%", pl: "50%" },
          }}
        >
          <Grid item>
            <Typography
              variant="h2"
              sx={{ mt: 10 }}
              dangerouslySetInnerHTML={{ __html: t("missionStatementTitle") }}
            />
          </Grid>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="body1" sx={{ mb: 5 }}>
                {t("missionStatementDescription")}
              </Typography>
            </Grid>
            <Grid item>
              <OutlinedButton arrowDirection="right">
                {t("readMore")}
              </OutlinedButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PageSection>
  );
};
