import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { OutlinedButton } from "components/common/OutlinedButton";
import mission1 from "images/mission-1.png";
import mission2 from "images/mission-2.png";

export const MissionSection: FC = () => {
  const t = useTranslate();
  const { lightGrey } = colors;
  const { h2, bodyLarge } = typography;
  const { phoneSmall, tabletLarge } = breakpoints;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid
        container
        sx={{
          flexDirection: "row",
          [phoneSmall]: { flexDirection: "column" },
          [tabletLarge]: { flexDirection: "row" },
        }}
      >
        <Grid
          item
          sx={{
            width: "50%",
            [phoneSmall]: { width: "100%", height: 300 },
            [tabletLarge]: { width: "50%" },
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
            width: "50%",
            [phoneSmall]: { width: "100%" },
            [tabletLarge]: { width: "50%" },
          }}
        >
          <Grid item>
            <Box
              component="h2"
              sx={{ ...h2, mt: 10 }}
              dangerouslySetInnerHTML={{ __html: t("missionStatementTitle") }}
            />
          </Grid>
          <Grid item container direction="column">
            <Grid item>
              <Box component="p" sx={{ ...bodyLarge, mb: 5 }}>
                {t("missionStatementDescription")}
              </Box>
            </Grid>
            <Grid item>
              {" "}
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
