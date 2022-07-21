import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";
// import microphone from "public/images/microphone.png";
// import preservingGuide from "public/images/preserving-guide.png";
// import saveVideo from "public/images/save-video.png";

export const MoreSection: FC = ({ children }) => {
  const t = useTranslate();
  const { white } = colors;
  const { h2, bodyLarge } = typography;
  const { ps, tl } = breakpoints;

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
            sx={{ ...h2, textAlign: "center" }}
            dangerouslySetInnerHTML={{
              __html: t("moreAboutSaveTitle"),
            }}
          />
        </Grid>
        <Grid item>
          <Box
            component="p"
            sx={{
              ...bodyLarge,
              textAlign: "center",
              mb: "80px",
              maxWidth: 700,
              margin: "auto",
            }}
          >
            {t("moreAboutSaveDescription")}
          </Box>
        </Grid>
        <Grid
          item
          container
          columnSpacing={6}
          sx={{
            flexDirection: "row",
            [ps]: { flexDirection: "column" },
            [tl]: { flexDirection: "row" },
          }}
        >
          {children}
        </Grid>
      </Grid>
    </PageSection>
  );
};
