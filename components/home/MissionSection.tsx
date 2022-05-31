import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";
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
          paddingTop: "50px",
          paddingBottom: "50px",
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
              width: "100%",
              backgroundImage: `url(${mission2.src}), url(${mission1.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "300px",
              backgroundPosition: "50% 50%, 0% 25%",
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
              sx={h2}
              dangerouslySetInnerHTML={{ __html: t("missionStatementTitle") }}
            />
          </Grid>
          <Grid item>
            <Box component="p" sx={bodyLarge}>
              {t("missionStatementDescription")}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </PageSection>
  );
};
