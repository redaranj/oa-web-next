import { FC } from "react";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors, breakpoints, loader } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { OutlinedButton } from "components/common/OutlinedButton";
import saveHeader from "images/save-header.png";
import saveLogo from "images/save-logo.png";

export const HeaderSection: FC = () => {
  const t = useTranslate();
  const { lightGrey, mediumGrey } = colors;
  const { h1, bodyLarge } = typography;
  const { phoneSmall, tabletSmall } = breakpoints;

  return (
    <PageSection backgroundColor={lightGrey} sx={{ pb: 0 }}>
      <Grid
        container
        sx={{
          flexDirection: "row",
          [phoneSmall]: { flexDirection: "column" },
          [tabletSmall]: { flexDirection: "row" },
        }}
      >
        <Grid
          container
          direction="column"
          item
          sx={{
            pt: "180px",
            pb: "250px",
            width: "50%",
            [phoneSmall]: {
              width: "100%",
            },
            [tabletSmall]: {
              width: "50%",
            },
          }}
        >
          <Grid item container direction="row" spacing="30px">
            <Grid item>
              <Box
                sx={{
                  width: "90px",
                  mt: "12px",
                }}
              >
                <Image src={saveLogo} loader={loader} alt="Save logo" />
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  width: "1px",
                  mt: "12px",
                  height: "70%",
                  backgroundColor: mediumGrey,
                }}
              />
            </Grid>
            <Grid item>
              <Box
                component="h1"
                sx={{ ...h1, ml: "16px" }}
                dangerouslySetInnerHTML={{
                  __html: t("appSaveTitle"),
                }}
              />
            </Grid>
          </Grid>
          <Grid item container direction="column">
            <Grid item>
              <Box
                component="p"
                sx={{ ...bodyLarge, maxWidth: "550px", mb: "60px" }}
              >
                {t("appSaveDescription")}
              </Box>
            </Grid>
            <Grid item>
              <OutlinedButton arrowDirection="down">{t("more")}</OutlinedButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column-reverse"
          sx={{
            width: "50%",
          }}
        >
          <Grid item>
            <Box sx={{ width: "1000px", mb: "-10px" }}>
              <Image src={saveHeader} loader={loader} alt="" />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </PageSection>
  );
};
