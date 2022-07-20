import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import ourTeam from "public/images/our-team.svg";
import arm1 from "public/images/arm-1.svg";
import arm2 from "public/images/arm-2.svg";
import arm3 from "public/images/arm-3.svg";
import arm4 from "public/images/arm-4.svg";
import arm5 from "public/images/arm-5.svg";

export const PartnersSection: FC = ({ children }) => {
  const t = useTranslate();
  const { white, lightGrey } = colors;
  const { h5 } = typography;
  const { ps, tl } = breakpoints;
  const [title, team, board, ...rest] = children as any[];

  return (
    <PageSection backgroundColor={white}>
      <Grid
        container
        sx={{
          flexDirection: "column",
        }}
      >
        <Grid item>{title}</Grid>
        <Grid item>
          <Box
            sx={{
              backgroundColor: lightGrey,
              mb: 8,
            }}
          >
            <Grid
              container
              sx={{
                flexDirection: "row",
                [ps]: { flexDirection: "column" },
                [tl]: { flexDirection: "row" },
              }}
            >
              <Grid
                item
                sx={{
                  width: "50%",
                  [ps]: { width: "100%" },
                  [tl]: { width: "50%" },
                }}
              >
                <Box
                  sx={{
                    backgroundImage: `url(${ourTeam.src})`,
                    backgroundSize: "75%",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    height: "100%",
                  }}
                />
              </Grid>
              <Grid
                item
                container
                direction="column"
                justifyContent="space-around"
                sx={{
                  width: "50%",
                  [ps]: { width: "100%" },
                  [tl]: { width: "50%" },
                }}
              >
                {team}
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ backgroundColor: lightGrey }}>
            <Grid item container direction="row">
              <Grid
                item
                sx={{
                  width: "50%",
                  [ps]: { width: "100%" },
                  [tl]: { width: "50%" },
                  pl: 8,
                }}
              >
                {board}
              </Grid>
              <Grid
                item
                sx={{
                  width: "50%",
                  [ps]: { width: "100%" },
                  [tl]: { width: "50%" },
                }}
              >
                <Box
                  sx={{
                    backgroundImage: `url(${arm1.src}), url(${arm2.src}), url(${arm3.src}), url(${arm4.src}), url(${arm5.src})`,
                    backgroundPosition:
                      "0% 0%, 100% 0%, 0% 100%, 100% 100% 100% 100%",
                    backgroundRepeat: "no-repeat",
                    height: "100%",
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item container direction="column">
          <Grid item>
            <Box
              component="h5"
              sx={{ ...h5, textAlign: "center", mt: 12, mb: 6 }}
            >
              {t("partners")}
            </Box>
          </Grid>
          <Grid
            item
            container
            sx={{
              pb: 8,
              flexDirection: "row",
              [ps]: { flexDirection: "column" },
              [tl]: { flexDirection: "row" },
            }}
          >
            {rest}
          </Grid>
        </Grid>
      </Grid>
    </PageSection>
  );
};
