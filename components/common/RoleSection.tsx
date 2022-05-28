import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import role1 from "images/role-1.png";
import role2 from "images/role-2.png";
import role3 from "images/role-3.png";

export const RoleSection: FC = () => {
  const t = useTranslate();
  const { h2, h3, h5, bodyLarge } = typography;
  const { white } = colors;

  return (
    <PageSection backgroundColor={white}>
      <Grid
        container
        direction="column"
        sx={{ paddingTop: "50px", paddingBottom: "50px" }}
      >
        <Grid item sx={{ textAlign: "center" }}>
          <Box
            component="h2"
            sx={h2}
            dangerouslySetInnerHTML={{ __html: t("roleToPlayTitle") }}
          />
          <Box sx={bodyLarge}>{t("roleToPlayDescription")}</Box>
        </Grid>
        <Grid item container direction="row" spacing={2}>
          <Grid
            item
            container
            direction="column"
            sx={{ width: "50%" }}
            spacing={2}
          >
            <Grid item>
              <Box
                sx={{
                  ...h5,
                  color: white,
                  p: 3,
                  height: 200,
                  backgroundImage: `url(${role1.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {t("haveQuestions")}
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  ...h5,
                  color: white,
                  p: 3,
                  height: 200,
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
            }}
          >
            <Box
              sx={{
                ...h3,
                color: white,
                p: 3,
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
