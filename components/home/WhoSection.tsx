import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { WhoItem } from "components/home/WhoItem";
import megan from "images/megan.svg";
import kevin from "images/kevin.svg";

export const WhoSection: FC = () => {
  const t = useTranslate();
  const { h2, bodyLarge } = typography;
  const { white } = colors;

  return (
    <PageSection backgroundColor={white}>
      <Grid
        container
        direction="column"
        sx={{ paddingTop: "50px", paddingBottom: "50px" }}
      >
        <Grid item container direction="row">
          <Grid item sx={{ width: "50%" }}>
            <Box
              component="h2"
              sx={h2}
              dangerouslySetInnerHTML={{ __html: t("whoWorkForTitle") }}
            />
          </Grid>
          <Grid item sx={{ width: "50%" }}>
            <Box component="p" sx={bodyLarge}>
              {t("whoWorkForDescription")}
            </Box>
          </Grid>
        </Grid>
        <Grid item container direction="row" spacing={2}>
          <WhoItem
            name={t("whoMeganName")}
            profile={t("whoMeganProfile")}
            description={t("whoMeganDescription")}
            image={megan}
            url=""
          />
          <WhoItem
            name={t("whoKevinName")}
            profile={t("whoKevinProfile")}
            description={t("whoKevinDescription")}
            image={kevin}
            url=""
          />
        </Grid>
      </Grid>
    </PageSection>
  );
};
