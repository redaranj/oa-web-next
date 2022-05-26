import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { OutlinedButton } from "components/common/OutlinedButton";
import header1 from "images/header-1.png";
import header2 from "images/header-2.png";

export const HeaderSection: FC = () => {
  const t = useTranslate();
  const { white } = colors;
  const { h1, bodyLarge } = typography;

  return (
    <PageSection backgroundColor={white}>
      <Grid
        container
        sx={{
          flexDirection: "row",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <Grid
          container
          direction="column"
          item
          sx={{
            width: "50%",
          }}
        >
          <Grid item>
            <Box
              component="h1"
              sx={h1}
              dangerouslySetInnerHTML={{
                __html: t("truthToPowerTitle"),
              }}
            />
          </Grid>
          <Grid item>
            <Box component="p" sx={bodyLarge}>
              {t("truthToPowerDescription")}
            </Box>
          </Grid>
          <OutlinedButton arrowDirection="down">{t("more")}</OutlinedButton>
        </Grid>
        <Grid
          item
          sx={{
            width: "50%",
            backgroundImage: `url(${header1.src}), url(${header2.src}), url(/images/header-3.png), url(/images/header-4.png), url(/images/header-5.png), url(/images/header-6.png), url(/images/header-7.png), url(/images/header-8.png)`,
            backgroundSize: "150px",
            backgroundPosition:
              "0% -25%, 50% 0%, 0% 25%, 50% 0%, 0% 50%, 50% 0%, 0% 25%, 75% 0%",
            backgroundRepeat: "no-repeat",
          }}
        >
          Photos
        </Grid>
      </Grid>
    </PageSection>
  );
};
