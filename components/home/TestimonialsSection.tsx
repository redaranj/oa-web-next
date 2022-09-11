import { FC, PropsWithChildren } from "react";
import { Grid } from "@mui/material";
import { colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const TestimonialsSection: FC<PropsWithChildren> = ({ children }) => {
  const { lightGrey } = colors;
  const [title, one, two] = children as any[];
  const { ps, ts } = breakpoints;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid container direction="column">
        <Grid item>{title}</Grid>
        <Grid
          item
          container
          spacing={6}
          sx={{
            flexDirection: "row",
            [ps]: { flexDirection: "column" },
            [ts]: { flexDirection: "row" },
          }}
        >
          {one}
          {two}
        </Grid>
      </Grid>
    </PageSection>
  );
};
