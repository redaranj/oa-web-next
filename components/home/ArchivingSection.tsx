import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { PageSection } from "components/common/PageSection";
import { breakpoints, colors, typography } from "styles/theme";
import mission1 from "public/images/mission-1.png";
import mission2 from "public/images/mission-2.png";

export const ArchivingSection: FC = ({ children }) => {
  const { outlinedButton } = typography;
  const { lightGrey } = colors;
  const { ps, pl } = breakpoints;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid
        container
        sx={{
          flexDirection: "row",
          [ps]: { flexDirection: "column" },
          [pl]: { flexDirection: "row" },
        }}
      >
        <Grid
          item
          sx={{
            width: "50%",
            [ps]: { width: "100%" },
            [pl]: { width: "50%" },
            position: "relative",
            overflow: "visible",
            ":before": {
              content: "''",
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              minHeight: 500,
              width: "100%",
              backgroundImage: `url(${mission1.src}), url(${mission2.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "500px",
              backgroundPosition: "0px 70px, 80px 300px",
              zIndex: 100,
            },
          }}
        />
        <Grid
          item
          container
          direction="column"
          sx={{
            width: "50%",
            [ps]: { width: "100%" },
            [pl]: { width: "50%" },
          }}
        >
          <Grid item>
            <Box
              sx={{
                a: outlinedButton,
                "> p": { mb: 4 },
              }}
            >
              {children}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </PageSection>
  );
};
