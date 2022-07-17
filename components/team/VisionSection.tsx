import { FC } from "react";
import { Box } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";
// import { VisionItem } from "components/team/VisionItem";
import visionBackground from "public/images/vision-background.png";

export const VisionSection: FC = () => {
  const t = useTranslate();
  const { white } = colors;
  const { h2 } = typography;
  const { ps, ds } = breakpoints;

  return (
    <>
      <PageSection backgroundColor={white} backgroundImage={visionBackground}>
        <Box
          component="h2"
          sx={{
            ...h2,
            color: white,
            textAlign: "center",
            pt: 7,
            pb: 17,
            [ps]: { pb: 17 },
            [ds]: { pb: 17 },
          }}
          dangerouslySetInnerHTML={{
            __html: t("ourSharedVisionTitle"),
          }}
        />
      </PageSection>
      {/*
      <PageSection backgroundColor={white}>
        <Box sx={{ position: "relative", height: 100 }}>
          <Box
            sx={{
              position: "absolute",
              width: "116vw",
              // minWidth: "1600px",
              left: "-8vw",
              top: -250,
              overflow: "hidden",
            }}
          >
            <Grid item container direction="row" spacing={6}>
              <VisionItem title={t("addMetadata")} number={t("01")} />
              <VisionItem
                title={t("flagSignificantContent")}
                number={t("02")}
              />
              <VisionItem title={t("addMetadata")} number={t("03")} />
              <VisionItem
                title={t("flagSignificantContent")}
                number={t("04")}
              />
            </Grid>
          </Box>
        </Box>
          </PageSection> */}
    </>
  );
};
