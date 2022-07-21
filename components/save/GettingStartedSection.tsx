import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { typography, colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import coreFeaturesBackground from "public/images/core-features-background.png";

export const GettingStartedSection: FC = ({ children }) => {
  const { white, turquoise } = colors;
  const { bodyLarge } = typography;
  const { ps, tl } = breakpoints;
  const [title, description, intro, ...rest] = children as any[];

  return (
    <PageSection backgroundColor={white}>
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
            {title}
          </Grid>
          <Grid
            item
            sx={{
              width: "50%",
              [ps]: { width: "100%" },
              [tl]: { width: "50%" },
            }}
          >
            <Box component="p" sx={{ ...bodyLarge }}>
              {description}
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          item
          spacing={8}
          sx={{
            mt: "100px",
            flexDirection: "row",
            [ps]: { flexDirection: "column" },
            [tl]: { flexDirection: "row" },
          }}
        >
          <Grid
            container
            item
            sx={{
              width: "50%",
              flexDirection: "row",
              [ps]: { flexDirection: "column", width: "100%" },
              [tl]: { flexDirection: "row", width: "50%" },
            }}
            spacing={6}
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
                  width: "100%",
                  minHeight: "300px",
                  backgroundColor: turquoise,
                  color: white,
                  p: 3,
                }}
              >
                {intro}
              </Box>
            </Grid>
            {rest}
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
                width: "100%",
                height: 1000,
                backgroundImage: `url(${coreFeaturesBackground.src})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </PageSection>
  );
};
