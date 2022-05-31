import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { OutlinedButton } from "components/common/OutlinedButton";
import header1 from "images/header-1.png";
import header2 from "images/header-2.png";
import header3 from "images/header-3.png";
import header4 from "images/header-4.png";
import header5 from "images/header-5.png";
import header6 from "images/header-6.png";
import header7 from "images/header-7.png";
import header8 from "images/header-8.png";

export const HeaderSection: FC = () => {
  const t = useTranslate();
  const { white } = colors;
  const { h1, bodyLarge } = typography;
  const {
    phoneSmall,
    phoneLarge,
    tabletSmall,
    tabletLarge,
    desktopSmall,
    desktopLarge,
  } = breakpoints;

  return (
    <PageSection backgroundColor={white}>
      <Grid
        container
        spacing={8}
        sx={{
          flexDirection: "row",
          [phoneSmall]: {
            flexDirection: "column-reverse",
          },
          [tabletLarge]: {
            flexDirection: "row",
          },
        }}
      >
        <Grid
          container
          direction="column"
          item
          sx={{
            width: "50%",
            [phoneSmall]: {
              width: "100%",
            },
            [tabletLarge]: {
              width: "50%",
            },
          }}
        >
          <Grid item>
            <Box
              component="h1"
              sx={{ ...h1, mt: 12 }}
              dangerouslySetInnerHTML={{
                __html: t("truthToPowerTitle"),
              }}
            />
          </Grid>
          <Grid item container direction="column" spacing={6} sx={{ mb: 12 }}>
            <Grid item>
              <Box component="p" sx={bodyLarge}>
                {t("truthToPowerDescription")}
              </Box>
            </Grid>
            <Grid item>
              <OutlinedButton arrowDirection="down">{t("more")}</OutlinedButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            width: "50%",
            overflow: "visible",
            [phoneSmall]: {
              width: "100%",
            },
            [tabletLarge]: {
              width: "50%",
            },
          }}
        >
          <Box
            sx={{
              height: "100%",
              minHeight: 500,
              overflow: "visible",
              width: "100%",
              backgroundImage: `url(${header1.src}), url(${header2.src}), url(${header3.src}), url(${header4.src}), url(${header5.src}), url(${header6.src}), url(${header7.src}), url(${header8.src})`,
              backgroundSize: "300px",
              backgroundPosition:
                "0% -25%, 50% 0%, 0% 25%, 50% 0%, 0% 50%, 50% 0%, 0% 25%, 75% 0%",
              backgroundRepeat: "no-repeat",
              [phoneSmall]: {
                width: "100%",
                height: 200,
              },
              [phoneLarge]: {},
              [tabletSmall]: {},
              [tabletLarge]: {},
              [desktopSmall]: {
                backgroundSize: "250px",
                backgroundPosition:
                  "60px -100px, 380px 0px, 60px 210px, 380px 310px, 60px 500px, 380px 1000px, 60px 2500px, 380px 10000px",
              },
              [desktopLarge]: {
                backgroundSize: "300px",
              },
            }}
          />
        </Grid>
      </Grid>
    </PageSection>
  );
};
