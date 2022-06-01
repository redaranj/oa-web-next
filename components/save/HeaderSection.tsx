import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { OutlinedButton } from "components/common/OutlinedButton";
import saveHeader from "images/save-header.png";

export const HeaderSection: FC = () => {
  const t = useTranslate();
  const { lightGrey } = colors;
  const { h1, bodyLarge } = typography;

  return (
    <PageSection backgroundColor={lightGrey}>
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
              sx={{ ...h1, mt: 30 }}
              dangerouslySetInnerHTML={{
                __html: t("appSaveTitle"),
              }}
            />
          </Grid>
          <Grid item container direction="column" spacing={6} sx={{ mb: 30 }}>
            <Grid item>
              <Box component="p" sx={bodyLarge}>
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
          sx={{
            width: "50%",
            backgroundImage: `url(${saveHeader.src})`,
            backgroundSize: "800px",
            backgroundPosition: "bottom center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </Grid>
    </PageSection>
  );
};
