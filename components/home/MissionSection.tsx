import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const MissionSection: FC = () => {
  const t = useTranslate();
  const { lightGrey } = colors;
  const { h2, bodyLarge } = typography;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid
        container
        direction="row"
        sx={{ paddingTop: "50px", paddingBottom: "50px" }}
      >
        <Grid
          item
          sx={{
            width: "50%",
            position: "relative",
            overflow: "visible",
            ":before": {
              content: "''",
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              width: "100%",
              backgroundImage:
                "url(/images/mission-2.png), url(/images/mission-1.png) ",
              backgroundRepeat: "no-repeat",
              backgroundSize: "300px",
              backgroundPosition: "50% 50%, 0% 25%",
              zIndex: 100,
            },
          }}
        />
        <Grid item container direction="column" sx={{ width: "50%" }}>
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
