import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";

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
          <Box
            component="h2"
            sx={h2}
            dangerouslySetInnerHTML={{
              __html: t("coreFeaturesTitle"),
            }}
          />
        </Grid>
        <Grid
          item
          sx={{
            width: "50%",
          }}
        >
          <Box component="p" sx={bodyLarge}>
            {t("coreFeaturesDescription")}
          </Box>
        </Grid>
      </Grid>
    </PageSection>
  );
};
