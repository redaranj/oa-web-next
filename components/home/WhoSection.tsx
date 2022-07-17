import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { HorizontalCarousel } from "components/common/HorizontalCarousel";
import { WhoItem } from "components/home/WhoItem";
import megan from "public/images/megan.svg";
import kevin from "public/images/kevin.svg";

export const WhoSection: FC = () => {
  const t = useTranslate();
  const { h2, bodyLarge } = typography;
  const { white } = colors;
  const { ps, ts } = breakpoints;

  return (
    <PageSection backgroundColor={white}>
      <Box>
        <Grid
          item
          container
          sx={{
            pb: 8,
            flexDirection: "row",
            [ps]: {
              flexDirection: "column",
            },
            [ts]: {
              flexDirection: "row",
            },
          }}
        >
          <Grid
            item
            sx={{
              width: "50%",
              [ps]: {
                width: "100%",
              },
              [ts]: {
                width: "50%",
              },
            }}
          >
            <Box
              component="h2"
              sx={h2}
              dangerouslySetInnerHTML={{ __html: t("whoServeTitle") }}
            />
          </Grid>
          <Grid
            item
            sx={{
              width: "50%",
              [ps]: {
                width: "100%",
              },
              [ts]: {
                width: "50%",
              },
            }}
          >
            <Box component="p" sx={bodyLarge}>
              {t("whoServeDescription")}
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <HorizontalCarousel columnOnMobile visibleCount={1.5}>
          <WhoItem
            name={t("whoAnnaName")}
            profile={t("whoAnnaProfile")}
            description={t("whoAnnaDescription")}
            image={megan}
            url=""
            backgroundProps={{
              backgroundSize: "180px",
              backgroundPosition: "30px 45px",
            }}
          />
          <WhoItem
            name={t("whoDariusName")}
            profile={t("whoDariusProfile")}
            description={t("whoDariusDescription")}
            image={kevin}
            url=""
            backgroundProps={{
              backgroundSize: "220px",
              backgroundPosition: "0px 50px",
            }}
          />
          <WhoItem
            name={t("whoKaiName")}
            profile={t("whoKaiProfile")}
            description={t("whoKaiDescription")}
            image={megan}
            url=""
            backgroundProps={{
              backgroundSize: "180px",
              backgroundPosition: "20px 45px",
            }}
          />
        </HorizontalCarousel>
      </Box>
    </PageSection>
  );
};
