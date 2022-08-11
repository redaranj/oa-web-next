import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints, typography } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import bullhorn from "public/images/bullhorn.svg";

export const MissionSection: FC = ({ children }) => {
  const { white } = colors;
  const { bodyLarge } = typography;
  const { ps, tl } = breakpoints;

  return (
    <PageSection backgroundColor={white}>
      <Grid item container sx={{ flexDirection: "row-reverse" }}>
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
              backgroundImage: `url(${bullhorn.src})`,
              backgroundSize: "100%",
              backgroundPosition: "top center",
              backgroundRepeat: "no-repeat",
              height: "100%",
              marginLeft: -4,
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
          <Box sx={{ "> p": bodyLarge }}>{children}</Box>
        </Grid>
      </Grid>
    </PageSection>
  );
};
