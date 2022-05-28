import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { OutlinedButton } from "components/common/OutlinedButton";

export const PartnersSection: FC = () => {
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
              sx={h1}
              dangerouslySetInnerHTML={{
                __html: t("aboutTitle"),
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
