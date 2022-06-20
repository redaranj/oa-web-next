import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import role1 from "images/role-1.png";
import role2 from "images/role-2.png";
import role3 from "images/role-3.png";

export const RoleSection: FC = () => {
  const t = useTranslate();
  const { h2, h3, h5, bodyLarge } = typography;
  const { white } = colors;
  const { ps, ts } = breakpoints;

  return (
    <PageSection backgroundColor={white}>
      <Grid container direction="column">
        <Grid item sx={{ textAlign: "center" }}>
          <Box
            component="h2"
            sx={h2}
            dangerouslySetInnerHTML={{ __html: t("roleToPlayTitle") }}
          />
          <Box
            component="p"
            sx={{
              ...bodyLarge,
              mb: 12,
              [ps]: {
                mb: 6,
              },
              [ts]: {
                mb: 12,
              },
              maxWidth: 700,
              margin: "auto",
            }}
          >
            {t("roleToPlayDescription")}
          </Box>
        </Grid>
        <Grid
          item
          container
          flexWrap="nowrap"
          sx={{
            height: 500,
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
            container
            direction="column"
            justifyContent="space-between"
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
            <Grid
              item
              sx={{
                height: "50%",
                pb: 3,
                [ps]: {
                  pb: 1,
                },
                [ts]: {
                  pb: 3,
                },
              }}
            >
              <Box
                sx={{
                  ...h5,
                  color: white,
                  p: 6,
                  height: "100%",
                  backgroundImage: `url(${role1.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {t("haveQuestions")}
              </Box>
            </Grid>
            <Grid
              item
              sx={{
                height: "50%",
                pt: 3,
                [ps]: {
                  pt: 1,
                },
                [ts]: {
                  pt: 3,
                },
              }}
            >
              <Box
                sx={{
                  ...h5,
                  color: white,
                  height: "100%",
                  p: 6,
                  backgroundImage: `url(${role2.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {t("getInvolved")}
              </Box>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{
              width: "50%",
              pt: 0,
              pl: 6,
              [ps]: {
                width: "100%",
                pt: 2,
                pl: 0,
              },
              [ts]: {
                width: "50%",
                pt: 0,
                pl: 6,
              },
            }}
          >
            <Box
              sx={{
                ...h3,
                color: white,
                p: 6,
                height: "100%",
                backgroundImage: `url(${role3.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {t("wantToParticipate")}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </PageSection>
  );
};
