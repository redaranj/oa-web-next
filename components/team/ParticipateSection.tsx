import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { OutlinedButton } from "components/common/OutlinedButton";
import { FilledButton } from "components/common/FilledButton";
import { ParticipateItem } from "components/team/ParticipateItem";

export const ParticipateSection: FC = () => {
  const t = useTranslate();
  const { white, black, lightBurgundy, lightTurquoise, mediumBurgundy } =
    colors;
  const { h2, bodyLarge } = typography;
  const { ps, tl } = breakpoints;

  return (
    <PageSection backgroundColor={white}>
      <Grid container direction="column">
        <Grid item>
          <Box
            component="h2"
            sx={{ ...h2, textAlign: "center", pt: 12 }}
            dangerouslySetInnerHTML={{
              __html: t("findOutParticipateTitle"),
            }}
          />
        </Grid>
        <Grid item>
          <Box component="p" sx={{ ...bodyLarge, textAlign: "center", pb: 6 }}>
            {t("findOutParticipateDescription")}
          </Box>
        </Grid>
        <Grid
          item
          container
          spacing={6}
          alignItems="flex-end"
          sx={{
            pb: 12,
            flexDirection: "row",
            [ps]: { flexDirection: "column" },
            [tl]: {
              flexDirection: "row",
            },
          }}
        >
          <ParticipateItem
            title={t("haveQuestions")}
            backgroundColor={lightBurgundy}
            height={200}
          >
            <Grid container direction="row" spacing={2}>
              <Grid item>
                <OutlinedButton borderColor={black}>
                  {t("aboutUs")}
                </OutlinedButton>
              </Grid>
              <Grid item>
                <OutlinedButton borderColor={black}>{t("faq")}</OutlinedButton>
              </Grid>
            </Grid>
          </ParticipateItem>
          <ParticipateItem
            title={t("makeOurProgramsPossible")}
            backgroundColor={lightTurquoise}
            height={250}
          >
            <FilledButton backgroundColor={mediumBurgundy}>
              {t("donate")}
            </FilledButton>
          </ParticipateItem>
          <ParticipateItem
            title={t("act")}
            backgroundColor={lightBurgundy}
            height={200}
          >
            <OutlinedButton borderColor={black}>
              {t("getInvolved")}
            </OutlinedButton>
          </ParticipateItem>
        </Grid>
      </Grid>
    </PageSection>
  );
};
