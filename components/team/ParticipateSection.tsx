import { FC } from "react";
import { Grid } from "@mui/material";
import { colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const ParticipateSection: FC = ({ children }) => {
  const { white } = colors;
  const { ps, tl } = breakpoints;
  const [title, description, ...items] = children as any[];

  return (
    <PageSection backgroundColor={white}>
      <Grid container direction="column">
        <Grid item sx={{ textAlign: "center" }}>
          {title}
        </Grid>
        <Grid item sx={{ textAlign: "center" }}>
          {description}
        </Grid>
        <Grid
          item
          container
          spacing={6}
          alignItems="flex-end"
          sx={{
            pb: 12,
            flexDirection: "row",
            [ps]: { flexDirection: "column" },
            [tl]: {
              flexDirection: "row",
            },
          }}
        >
          {items}
        </Grid>
      </Grid>
    </PageSection>
  );
};
