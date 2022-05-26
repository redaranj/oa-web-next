import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
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

  return (
    <PageSection backgroundColor={white}>
      <Grid
        container
        spacing={8}
        sx={{
          flexDirection: "row",
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
            backgroundImage: `url(${header1.src}), url(${header2.src}), url(${header3.src}), url(${header4.src}), url(${header5.src}), url(${header6.src}), url(${header7.src}), url(${header8.src})`,
            backgroundSize: "150px",
            backgroundPosition:
              "0% -25%, 50% 0%, 0% 25%, 50% 0%, 0% 50%, 50% 0%, 0% 25%, 75% 0%",
            backgroundRepeat: "no-repeat",
          }}
        />
      </Grid>
    </PageSection>
  );
};
