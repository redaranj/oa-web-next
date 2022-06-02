import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { PartnerItem } from "components/about/PartnerItem";
import ourTeam from "images/our-team.svg";
import arm1 from "images/arm-1.svg";
import arm2 from "images/arm-2.svg";
import arm3 from "images/arm-3.svg";
import arm4 from "images/arm-4.svg";
import arm5 from "images/arm-5.svg";
import ffdw from "images/ffdw.png";
import otf from "images/otf.png";
import knight from "images/knight.png";

export const PartnersSection: FC = () => {
  const t = useTranslate();
  const { white, lightGrey } = colors;
  const { h2, h5, bodyLarge } = typography;

  return (
    <PageSection backgroundColor={white}>
      <Grid
        container
        sx={{
          flexDirection: "column",
        }}
      >
        <Grid item>
          <Box
            component="h2"
            sx={{ ...h2, textAlign: "center", pt: 16 }}
            dangerouslySetInnerHTML={{
              __html: t("couldntAloneTitle"),
            }}
          />
        </Grid>
        <Grid item>
          <Box
            sx={{
              backgroundColor: lightGrey,
              mb: 8,
            }}
          >
            <Grid container direction="row">
              <Grid item sx={{ width: "50%" }}>
                <Box
                  sx={{
                    backgroundImage: `url(${ourTeam.src})`,
                    backgroundSize: "75%",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    height: "100%",
                  }}
                />
              </Grid>
              <Grid
                item
                container
                direction="column"
                justifyContent="space-around"
                sx={{ width: "50%" }}
              >
                <Grid item>
                  <Box component="h5" sx={{ ...h5, pt: 16, pr: 8 }}>
                    {t("ourTeam")}
                  </Box>
                  <Box component="p" sx={{ ...bodyLarge, pb: 16 }}>
                    {t("ourTeamInfo")}
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ backgroundColor: lightGrey }}>
            <Grid item container direction="row">
              <Grid item sx={{ width: "50%", pl: 8 }}>
                <Box component="h5" sx={{ ...h5, pt: 16 }}>
                  {t("advisoryBoard")}
                </Box>
                <Box component="p" sx={{ ...bodyLarge, pb: 16 }}>
                  {t("advisoryBoardInfo")}
                </Box>
              </Grid>
              <Grid item sx={{ width: "50%" }}>
                <Box
                  sx={{
                    backgroundImage: `url(${arm1.src}), url(${arm2.src}), url(${arm3.src}), url(${arm4.src}), url(${arm5.src})`,
                    backgroundPosition:
                      "0% 0%, 100% 0%, 0% 100%, 100% 100% 100% 100%",
                    backgroundRepeat: "no-repeat",
                    height: "100%",
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item container direction="column">
          <Grid item>
            <Box
              component="h5"
              sx={{ ...h5, textAlign: "center", mt: 12, mb: 6 }}
            >
              {t("partners")}
            </Box>
          </Grid>
          <Grid item container direction="row" sx={{ pb: 8 }}>
            <PartnerItem
              name="Filecoin Foundation for the Distributed Web"
              image={ffdw}
              url="https://ffdweb.org"
            />
            <PartnerItem
              name="Open Technology Fund"
              image={otf}
              url="https://www.opentech.fund"
            />
            <PartnerItem
              name="Knight Foundation"
              image={knight}
              url="https://knightfoundation.org/"
            />
          </Grid>
        </Grid>
      </Grid>
    </PageSection>
  );
};
