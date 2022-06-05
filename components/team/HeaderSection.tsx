import { FC } from "react";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors, loader } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { OutlinedButton } from "components/common/OutlinedButton";
import ourTeam from "images/our-team.svg";

export const HeaderSection: FC = () => {
  const t = useTranslate();
  const { lightGrey } = colors;
  const { h1, bodyLarge } = typography;

  return (
    <PageSection backgroundColor={lightGrey} sx={{ mt: 8 }}>
      <Grid
        container
        sx={{
          flexDirection: "row",
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="space-around"
          item
          xs={6}
          sx={{ pr: 8 }}
        >
          <Grid item container direction="column">
            <Grid item>
              <Box
                component="h1"
                sx={h1}
                dangerouslySetInnerHTML={{
                  __html: t("ourTeamTitle"),
                }}
              />
            </Grid>
            <Grid item>
              <Box component="p" sx={{ ...bodyLarge, maxWidth: 600, mb: 4 }}>
                {t("ourTeamDescription")}
              </Box>
            </Grid>
            <Grid item>
              <OutlinedButton arrowDirection="down">{t("more")}</OutlinedButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ m: -8 }}>
            <Image src={ourTeam} alt="" loader={loader} />
          </Box>
        </Grid>
      </Grid>
    </PageSection>
  );
};
