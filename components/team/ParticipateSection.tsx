import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { OutlinedButton } from "components/common/OutlinedButton";
import { FilledButton } from "components/common/FilledButton";
import { ParticipateItem } from "components/team/ParticipateItem";

export const ParticipateSection: FC = () => {
  const t = useTranslate();
  const { white, lightBurgundy, lightTurquoise, mediumBurgundy } = colors;
  const { h2, bodyLarge } = typography;

  return (
    <PageSection backgroundColor={white}>
      <Grid container direction="column">
        <Grid item>
          <Box
            component="h2"
            sx={{ ...h2, textAlign: "center" }}
            dangerouslySetInnerHTML={{
              __html: t("findOutParticipateTitle"),
            }}
          />
        </Grid>
        <Grid item>
          <Box component="p" sx={{ ...bodyLarge, textAlign: "center" }}>
            {t("findOutParticipateDescription")}
          </Box>
        </Grid>
        <Grid item container direction="row">
          <ParticipateItem
            title={t("haveQuestions")}
            backgroundColor={lightBurgundy}
          >
            <OutlinedButton>{t("aboutUs")}</OutlinedButton>
            <OutlinedButton>{t("faq")}</OutlinedButton>
          </ParticipateItem>
          <ParticipateItem
            title={t("makeOurProgramsPossible")}
            backgroundColor={lightTurquoise}
          >
            <FilledButton backgroundColor={mediumBurgundy}>
              {t("Donate")}
            </FilledButton>
          </ParticipateItem>
          <ParticipateItem title={t("act")} backgroundColor={lightBurgundy}>
            <OutlinedButton>{t("getInvolved")}</OutlinedButton>
          </ParticipateItem>
        </Grid>
      </Grid>
    </PageSection>
  );
};
