import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints, typography } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const MoreSection: FC = ({ children }) => {
  const { white } = colors;
  const { bodyLarge } = typography;
  const { ps, tl } = breakpoints;
  const [title, description, ...items] = children as any[];

  return (
    <PageSection backgroundColor={white}>
      <Grid
        container
        sx={{
          flexDirection: "column",
        }}
      >
        <Grid item sx={{ textAlign: "center" }}>
          {title}
        </Grid>
        <Grid item>
          <Box
            sx={{
              textAlign: "center",
              maxWidth: 700,
              margin: "auto",
              "> p": bodyLarge,
            }}
          >
            {description}
          </Box>
        </Grid>
        <Grid
          item
          container
          columnSpacing={6}
          sx={{
            mt: 6,
            flexDirection: "row",
            [ps]: { flexDirection: "column" },
            [tl]: { flexDirection: "row" },
          }}
        >
          {items}
        </Grid>
      </Grid>
    </PageSection>
  );
};
