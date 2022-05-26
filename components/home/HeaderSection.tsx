import { FC } from "react";
import { Box, Grid, Button } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors, breakpoints as bp } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const HeaderSection: FC = () => {
  const t = useTranslate();
  const { white, turquoise } = colors;
  const { h1, bodyLarge } = typography;

  return (
    <PageSection backgroundColor={white}>
      <Grid
        container
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
          <Button>{t("more")}</Button>
        </Grid>
        <Grid
          item
          sx={{
            width: "50%",
            backgroundImage: `url(/images/header-1.png), url(/images/header-2.png), url(/images/header-3.png), url(/images/header-4.png), url(/images/header-5.png), url(/images/header-6.png), url(/images/header-7.png), url(/images/header-8.png)`,
            backgroundSize: "150px",
            backgroundPosition:
              "0% -25%, 50% 0%, 0% 25%, 50% 0%, 0% 0%, 50% 0%, 0% 0%, 50% 0%",
            backgroundRepeat: "no-repeat",
          }}
        >
          Photos
        </Grid>
      </Grid>
    </PageSection>
  );
};
