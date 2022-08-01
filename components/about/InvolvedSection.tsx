import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { typography, colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const InvolvedSection: FC = ({ children }) => {
  const { bodyLarge } = typography;
  const { white } = colors;
  const { ps, ts } = breakpoints;
  const [title, description, ...rest] = children as any[];

  return (
    <PageSection backgroundColor={white}>
      <Grid container direction="column">
        <Grid item sx={{ textAlign: "center" }}>
          <Box>{title}</Box>
          <Box
            sx={{
              "> p": bodyLarge,
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
            {description}
          </Box>
        </Grid>
        <Grid
          item
          container
          flexWrap="nowrap"
          spacing={6}
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
          {rest}
        </Grid>
      </Grid>
    </PageSection>
  );
};
