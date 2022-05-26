import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const RoleSection: FC = () => {
  const t = useTranslate();
  const { h1, bodyLarge } = typography;
  const { white } = colors;

  return (
    <PageSection backgroundColor={white}>
      <Grid container direction="column">
        <Grid item sx={{ textAlign: "center" }}>
          <Box
            component="h1"
            sx={h1}
            dangerouslySetInnerHTML={{ __html: t("roleToPlayTitle") }}
          />
          <Box sx={bodyLarge}>{t("roleToPlayDescription")}</Box>
        </Grid>
        <Grid item container direction="row">
          <Grid item container direction="column" sx={{ width: "50%" }}>
            <Grid item>{t("haveQuestions")}</Grid>
            <Grid item>{t("getInvolved")}</Grid>
          </Grid>
          <Grid item sx={{ width: "50%" }}>
            {t("wantToParticipate")}
          </Grid>
        </Grid>
      </Grid>
    </PageSection>
  );
};
