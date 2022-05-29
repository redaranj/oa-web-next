import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { PartnerItem } from "components/about/PartnerItem";
import guideSample from "images/guide-sample.png";

export const PartnersSection: FC = () => {
  const t = useTranslate();
  const { lightGrey } = colors;
  const { h2 } = typography;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid
        container
        spacing={8}
        sx={{
          flexDirection: "column",
        }}
      >
        <Grid item>
          <Box
            component="h2"
            sx={{ ...h2, textAlign: "center" }}
            dangerouslySetInnerHTML={{
              __html: t("couldntAloneTitle"),
            }}
          />
        </Grid>
        <Grid item container direction="row">
          <Grid item sx={{ width: "50%" }} />
          <Grid item sx={{ width: "50%" }}>
            <Box>{t("ourTeam")}</Box>
            <Box>{t("ourTeamInfo")}</Box>
          </Grid>
        </Grid>
        <Grid item container direction="row">
          <Grid item sx={{ width: "50%" }} />
          <Grid item sx={{ width: "50%" }}>
            <Box>{t("advisoryBoard")}</Box>
            <Box>{t("advisoryBoardInfo")}</Box>
          </Grid>
        </Grid>
        <Grid item>
          <Box>{t("partners")}</Box>
        </Grid>
        <Grid item container direction="row">
          <PartnerItem
            name="Filecoin Foundation for the Distributed Web"
            image={guideSample}
            url=""
          />
          <PartnerItem name="Open Technology Fund" image={guideSample} url="" />
          <PartnerItem name="Knight Foundation" image={guideSample} url="" />
        </Grid>
      </Grid>
    </PageSection>
  );
};
