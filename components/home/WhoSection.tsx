import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { WhoItem } from "components/home/WhoItem";

export const WhoSection: FC = () => {
  const t = useTranslate();
  const { h1, bodyLarge } = typography;
  const { white } = colors;

  return (
    <PageSection backgroundColor={white}>
      <Grid container direction="column">
        <Grid item container direction="row">
          <Grid item sx={{ width: "50%" }}>
            <Box
              component="h1"
              sx={h1}
              dangerouslySetInnerHTML={{ __html: t("whoWorkForTitle") }}
            />
          </Grid>
          <Grid item sx={{ width: "50%" }}>
            <Box component="p" sx={bodyLarge}>
              {t("whoWorkForDescription")}
            </Box>
          </Grid>
        </Grid>
        <Grid item container direction="row">
          <WhoItem
            name={t("whoMeganName")}
            profile={t("whoMeganProfile")}
            description={t("whoMeganDescription")}
            image={null}
            url={null}
          />
          <WhoItem
            name={t("whoKevinName")}
            profile={t("whoKevinProfile")}
            description={t("whoKevinDescription")}
            image={null}
            url={null}
          />
        </Grid>
      </Grid>
    </PageSection>
  );
};
