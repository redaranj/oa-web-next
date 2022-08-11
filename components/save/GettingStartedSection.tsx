import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { typography, colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const GettingStartedSection: FC = ({ children }) => {
  const { lightGrey, mediumGrey, turquoise } = colors;
  const { bodyLarge, outlinedButton } = typography;
  const { ps, tl } = breakpoints;
  const [title, description, ...rest] = children as any[];

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid container direction="column">
        <Grid
          container
          item
          sx={{
            borderBottom: `1px solid ${mediumGrey}`,
            pb: 3,
            mb: 2,
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
            <Box sx={{ "> p": bodyLarge }}>{description}</Box>
          </Grid>
        </Grid>
        <Grid
          container
          item
          spacing={8}
          sx={{
            mt: 0,
            flexDirection: "row",
            [ps]: { flexDirection: "column" },
            [tl]: { flexDirection: "row" },
            counterReset: "stepCounter",
            ".step": {
              counterIncrement: "stepCounter",
            },
            ".step::before": {
              ...bodyLarge,
              content: "counter(stepCounter, decimal-leading-zero)",
              color: turquoise,
              fontWeight: "bold",
              display: "flex",
              pl: "10px",
              pt: "9px",
            },
            a: outlinedButton,
          }}
        >
          {rest}
        </Grid>
      </Grid>
    </PageSection>
  );
};
