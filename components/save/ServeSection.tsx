import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const ServeSection: FC = ({ children }) => {
  const t = useTranslate();
  const { lightGrey } = colors;
  const { h2, h6, bodyLarge } = typography;
  const { ps, tl } = breakpoints;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid container direction="column">
        <Grid
          container
          item
          sx={{
            flexDirection: "row",
            [ps]: { flexDirection: "column" },
            [tl]: { flexDirection: "row" },
          }}
        >
          <Grid
            container
            direction="column"
            item
            sx={{
              width: "50%",
              [ps]: { width: "100%" },
              [tl]: { width: "50%" },
            }}
          >
            <Box
              component="h2"
              sx={{ ...h2 }}
              dangerouslySetInnerHTML={{
                __html: t("gettingStartedTitle"),
              }}
            />
          </Grid>
          <Grid
            item
            sx={{
              width: "50%",
              [ps]: { width: "100%" },
              [tl]: { width: "50%" },
            }}
          >
            <Box component="p" sx={{ ...bodyLarge, mb: 16 }}>
              {t("gettingStartedDescription")}
            </Box>
          </Grid>
        </Grid>
        <Grid item>
          <Box component="h6" sx={{ ...h6, mb: 6 }}>
            {t("threeEasySteps")}
          </Box>
        </Grid>
        <Grid
          container
          item
          spacing={8}
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
