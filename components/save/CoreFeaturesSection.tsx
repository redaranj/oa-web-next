import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { OutlinedButton } from "components/common/OutlinedButton";

export const CoreFeaturesSection: FC = () => {
  const t = useTranslate();
  const { white } = colors;
  const { h2, bodyLarge } = typography;

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
              component="h2"
              sx={h2}
              dangerouslySetInnerHTML={{
                __html: t("appSaveTitle"),
              }}
            />
          </Grid>
          <Grid item>
            <Box component="p" sx={bodyLarge}>
              {t("appSaveDescription")}
            </Box>
          </Grid>
          <OutlinedButton arrowDirection="down">{t("more")}</OutlinedButton>
        </Grid>
        <Grid
          item
          sx={{
            width: "50%",
            backgroundImage: `url()`,
            backgroundSize: "150px",
            backgroundPosition: "0% 0%",
            backgroundRepeat: "no-repeat",
          }}
        />
      </Grid>
    </PageSection>
  );
};
