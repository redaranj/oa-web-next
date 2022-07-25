import { FC } from "react";
import { Grid } from "@mui/material";
import { colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import coreFeaturesBackground from "public/images/core-features-background.png";

export const CoreFeaturesSection: FC = ({ children }) => {
  const { white } = colors;
  const { ps, tl } = breakpoints;
  const [title, description, ...rest] = children as any[];

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
            {description}
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
            backgroundImage: `url(${coreFeaturesBackground.src})`,
            backgroundPosition: "100% 100%",
            backgroundSize: "50%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Grid
            container
            item
            sx={{
              width: "70%",
              zIndex: 100,
              flexDirection: "row",
              [ps]: { flexDirection: "column", width: "100%" },
              [tl]: { flexDirection: "row", width: "70%" },
            }}
            spacing={6}
          >
            {rest}
          </Grid>
        </Grid>
      </Grid>
    </PageSection>
  );
};
